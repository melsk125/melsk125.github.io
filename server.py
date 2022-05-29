import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
      ".js": "application/javascript",
      ".css": "text/css",
});

httpd = socketserver.TCPServer(("", PORT), Handler)
httpd.serve_forever()
