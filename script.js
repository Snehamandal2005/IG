function generateGallery() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const theme = document.getElementById("theme").value;
  const files = document.getElementById("images").files;

  if (!title || !description || !theme || files.length === 0) {
    alert("Please fill all fields and upload at least one image.");
    return;
  }

  // Convert each image to base64 using FileReader
  const promises = Array.from(files).map(file => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  });

  // Wait for all images to be read
  Promise.all(promises).then(imageDataURLs => {
    const galleryData = {
      title,
      description,
      theme,
      images: imageDataURLs
    };
    sessionStorage.setItem("galleryData", JSON.stringify(galleryData));
    window.location.href = "gallery.html";
  });
}
