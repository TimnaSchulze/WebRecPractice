window.addEventListener("load", function() {
  let form = document.querySelector("form");

  const h1Old = document.querySelector("h1");
  h1Old.remove();

  const h1New = document.createElement("h1");
  h1New.append("Webpage Recreation Practice");

  const p1 = document.createElement("p");
  p1.append("The HTML of this webpage was created with JavaScript");

  const tanagerPic = document.createElement("img");
  tanagerPic.append("img src='https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001' alt='This is an image of a Multicolored Tanager bird from birdsoftheworld.org' style='width:50%'");

  const h1NewTwo = document.createElement("h1");
  h1NewTwo.append("Facts about the Multicolored Tanager");

  const ul = document.createElement("ul");
  ul.setAttribute("id", "Facts");
  document.querySelector("div").append("ul");
  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  liOne.append("It is endemic to the mountains of Colombia");
  liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.")

  const h2 = document.createElement("h2");
  h2.append("Source");
  const sourceLink = document.createElement("a");
  sourceLink.append("a href='https://en.wikipedia.org/wiki/Multicoloured_tanager'>Wikipedia");
});