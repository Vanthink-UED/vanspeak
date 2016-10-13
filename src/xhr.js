 // simple xhr
 var xhr = function (method, url, headers, data, callback) {

   var r = new XMLHttpRequest();
   var error = this.error;

   // Binary?
   var binary = false;
   if (method === 'blob') {
     binary = method;
     method = 'GET';
   }

   method = method.toUpperCase();

   // Xhr.responseType 'json' is not supported in any of the vendors yet.
   r.onload = function (e) {
     var json = r.response;
     
     try {
       json = JSON.parse(r.responseText);
     } catch (_e) {
       if (r.status === 401) {
         json = console.error('access_denied', r.statusText);
       }
     }

     var headers = headersToJSON(r.getAllResponseHeaders());
     headers.statusCode = r.status;
     callback = callback || function () {};
     callback(json || (method === 'GET' ? error('empty_response', 'Could not get resource') : {}), headers);
   };

   r.onerror = function (e) {
     var json = r.responseText;
     try {
       json = JSON.parse(r.responseText);
     } catch (_e) {}

     callback && callback(json || console.error('access_denied', 'Could not get resource'));
   };

   var x;

   // Should we add the query to the URL?
   if (method === 'GET' || method === 'DELETE') {
     data = null;
   } else if (data && typeof (data) !== 'string' && !(data instanceof FormData) && !(data instanceof File) && !(data instanceof Blob)) {
     // Loop through and add formData
     var f = new FormData();
     for (x in data)
       if (data.hasOwnProperty(x)) {
         if (data[x] instanceof HTMLInputElement) {
           if ('files' in data[x] && data[x].files.length > 0) {
             f.append(x, data[x].files[0]);
           }
         } else if (data[x] instanceof Blob) {
           f.append(x, data[x], data.name);
         } else {
           f.append(x, data[x]);
         }
       }

     data = f;
   }

   // Open the path, async
   r.open(method, url, true);

   if (binary) {
     if ('responseType' in r) {
       r.responseType = binary;
     } else {
       r.overrideMimeType('text/plain; charset=x-user-defined');
     }
   }

   // Set any bespoke headers
   if (headers) {
     for (x in headers) {
       r.setRequestHeader(x, headers[x]);
     }
   }

   r.send(data);

   return r;

   // Headers are returned as a string
   function headersToJSON(s) {
     var r = {};
     var reg = /([a-z\-]+):\s?(.*);?/gi;
     var m;
     while ((m = reg.exec(s))) {
       r[m[1]] = m[2];
     }
     return r;
   }
 };

 module.exports = xhr;