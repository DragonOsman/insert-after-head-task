"use strict";

const str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

const regex = /(?<=(<body(>|.*>)))/;
alert(str.replace(regex, "<h1>Hello</h1>"));
