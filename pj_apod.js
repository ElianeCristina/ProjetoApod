$("#submit").click(function(event){
    event.preventDefault();
    pesquisar();

function pesquisar(){
    var data = document.getElementById("data").value;
    $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=dAIKxaQYznpQC4x3cJilLzKlifcdHTTzo5Xp5y1e&date=${data}`,
    success: function(data) {
        $('#img').attr('src', data.url) 
        $('#title').text(data.title)
        $('#explanation').text(data.explanation)
        $('#copyright').text(data.copyright);
    }})
}
})