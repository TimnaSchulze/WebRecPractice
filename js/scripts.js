window.onload = function() {
  let body = document.querySelector("body");

  let h1Old = document.querySelector("h1");
  h1Old.innerText = "Webpage Recreation Practice";

  const p = document.createElement("p");
  p.innerText = "The HTML of this webpage was created with JavaScript";
  body.append(p);

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001"
  );
  img.setAttribute(
    "alt",
    "This is an image of a Multicolored Tanager bird from birdsoftheworld.org"
  );
  img.setAttribute("style", "width:50%");
  body.append(img);

  const h1NewTwo = document.createElement("h1");
  h1NewTwo.innerText = "Facts about the Multicolored Tanger";
  body.append(h1NewTwo);

  const ul = document.createElement("ul");
  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  liOne.append("It is endemic to the mountains of Colombia");
  liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  ul.append(liOne, liTwo);
  body.append(ul);

  const h2 = document.createElement("h2");
  h2.innerText = "Source";
  body.append(h2);

  const a = document.createElement("a");
  a.setAttribute("href", "'https://en.wikipedia.org/wiki/Multicoloured_tanager'>Wikipedia");
  a.append("Wikipedia");
  body.append(a)
};