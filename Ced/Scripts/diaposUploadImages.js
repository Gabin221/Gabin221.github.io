// Function to upload images to Firebase Storage
function uploadImages() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
  
    for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const storageRef = firebase.storage().ref();
		const uploadTask = storageRef.child('Ced/Diapos/' + file.name).put(file);
	
		uploadTask.on('state_changed', 
			(snapshot) => {
					// Progress tracking
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done');
				},
				(error) => {
					// Handle unsuccessful uploads
					console.error('Error uploading file:', error);
				},
				() => {
					// Handle successful uploads on complete
					console.log('File uploaded successfully');
				}
		);
    }
  }