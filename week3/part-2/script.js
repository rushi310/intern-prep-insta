document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('upload').click();
});

document.getElementById('upload').addEventListener('change', function() {
    for (var i = 0; i < this.files.length; i++) {
        var reader = new FileReader();

        reader.onload = function(event) {
            var imgElement = document.createElement('img');
            imgElement.src = event.target.result;

            var gallery = document.getElementById('imageGallery');
            var imageDiv = document.createElement('div');
            imageDiv.classList.add('image-container'); // Add a class for the container
            imageDiv.appendChild(imgElement);

            gallery.appendChild(imageDiv);

            // Style the uploaded image
            imgElement.classList.add('uploaded-image'); // Add a class for the image
            
            // Add event listener to toggle image size
            imgElement.addEventListener('click', function() {
                this.classList.toggle('full-size');
            });
        // };
        // Adjust image size based on window size
        imgElement.onload = function() {
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var maxWidth = windowWidth * 0.8; // Adjust as needed
            var maxHeight = windowHeight * 0.8; // Adjust as needed
            
            if (this.width > maxWidth || this.height > maxHeight) {
                var ratio = Math.min(maxWidth / this.width, maxHeight / this.height);
                this.width = this.width * ratio;
                this.height = this.height * ratio;
            }
        };
    };


        reader.readAsDataURL(this.files[i]);
    }
});
