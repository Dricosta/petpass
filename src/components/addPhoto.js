window.document.getElementById('submitButton').addEventListener('click',(e)=>{
    e.preventDefault()
    const photo = document.getElementById('fileImage').files[0]
    var reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onloadend = function() {
        infos.photo = reader.result
        axios.post(url + '/user/signup', infos)
        .then(function(response){
            document.getElementById('uploadedPhoto').src = response.data.result.photo
        });  
    }
})