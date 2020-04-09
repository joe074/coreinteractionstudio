$(document).ready(function(){
    
    var urlParams = new URLSearchParams(location.search);
    var requestId = urlParams.get('id');

    $.ajax({
        url:"https://raw.githubusercontent.com/joe074/coreinteractionstudio/master/pages/project2/finalsheet.csv",
        dataType:"text",
        success:function(data)
        {
            var products = data.split(/\r?\n|\r/);

            for (var row=0; row < products.length; row++)
            {
                if (row == requestId)
                {
                    var rowData = products[requestId].split("|");
                    
                    $(".itemname").text(rowData[1]);
                    $(".location").text(rowData[2]);    
                    $(".reviews").text(rowData[3]);   
                      
                    $("#productImage").attr("src", rowData[6]);
                    $(".description").text(rowData[7]);  
                   
                }
            }
            
        }
    });  
    
});