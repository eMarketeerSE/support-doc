function redirect(location) {
  return {
    statusCode: 301,
    statusDescription: "Moved Permanently",
    headers: { location: { value: location } },
  };
}

function queryString(qs) {
  var parts = [];
  for (var key in qs) {
    var values = qs[key].multiValue || [{ value: qs[key].value }];
    for (var i = 0; i < values.length; i++) {
      parts.push(key + "=" + values[i].value);
    }
  }
  return parts.length ? "?" + parts.join("&") : "";
}

function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri === "/" || uri.indexOf("//") === 0) {
    return request;
  }

  if (uri.charAt(uri.length - 1) === "/") {
    return redirect(uri.slice(0, -1) + queryString(request.querystring));
  }

  if (uri.lastIndexOf(".") > uri.lastIndexOf("/")) {
    return request;
  }

  request.uri = uri + ".html";
  return request;
}
