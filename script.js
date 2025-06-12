function generateGallery() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const theme = document.getElementById("theme").value;
  const images = document.getElementById("images").files;

  if (!title || !description || !theme || images.length === 0) {
    alert("Please fill in all fields and upload at least one image.");
    return;
  }

  const imageURLs = [];

  for (let i = 0; i < images.length; i++) {
    const imageURL = URL.createObjectURL(images[i]);
    imageURLs.push(imageURL);
  }

  const galleryData = {
    title,
    description,
    theme,
    images: imageURLs
  };

  sessionStorage.setItem("galleryData", JSON.stringify(galleryData));
  window.location.href = "gallery.html";
}
