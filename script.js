function main() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  const reader = new FileReader();

  const uploadImageHandler = (e) => {
    reader.onload = () => {
      img.onload = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.drawImage(img, 0, 0);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const imageLoader = document.getElementById("upload");
  imageLoader.addEventListener("change", uploadImageHandler);

  function countdown(n){
    let array = []
    // if (n > 0) {
    //   let newArray = [];
    //   newArray.push(n);
    //   countdown(n - 1);
    //   console.log(newArray);
    //   return newArray;
    if (n < 1) {
        return [];
      } else {
        const countArray = countdown(n - 1);
        countArray.push(n);
        return countArray;
      }
    // }
    // if (n < 0) {
    //   return array
    // }
  }
  countdown(5)
}
