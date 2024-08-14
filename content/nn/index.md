---
title: "Network Number (spreadsheet form)"
aliases: ["/nn"]
---
**This page works best in incognito/private window mode!**

Enter the Install Number* below to get the NN that can be used to configure the rooftop antennas/routers. This can also be used with existing multiple apartment installs to figure out the network number (NN) for the roof/building you are connected to.

<form action="https://script.google.com/macros/s/AKfycbyDQ3OkLcbajV-JoDiEzIUGxOFptKVaVOvFf9uQbJhTFknBqkjZQEdUnh3ZnwQoh99m/exec">
  <label for="installnum">Install Number:</label>
  <input type="hidden" id="method" name="method" value="nn">
  <input type="hidden" name="format" value="1" />
  <input type="number" id="id" name="id" min="1" max="100000" required>
  <input type="submit" value='Get NN'>
  <input type="hidden" name="format" value="1" />
</form>

<br/>
<br/>

_*The Install Number is the number you received in an email right after you registered. If you can't find the email with your Install Number please [contact us](mailto:install@nycmesh.net)._
<br/>
<br/>

If you have the password you can assign a NN for an install number

<form action="https://script.google.com/macros/s/AKfycbyDQ3OkLcbajV-JoDiEzIUGxOFptKVaVOvFf9uQbJhTFknBqkjZQEdUnh3ZnwQoh99m/exec">Install Number:</label>
  <input type="hidden" id="method" name="method" value="nn">
  <input type="hidden" name="format" value="1" />
  <input type="number" id="id" name="id" min="1" max="100000" required>
  <label for="pwd">Password:</label>
  <input type="password" minlength="8" id="id" name="pwd" required>
  <input type="submit" value='Assign NN'>
</form>

For information about the NN system, please see [the Wiki Network Number page.](https://wiki.mesh.nycmesh.net/link/78#bkmrk-page-title)
