function setOverlay(){
    $('body').append(`<div class="overlay"><img src="img/ajax-loader.svg"</img></div>`);
}

function removeOverlay(){
    $('.overlay').remove();
}


$('form').submit(function(e)
{
    e.preventDefault();

    $('form').find('.error').remove();

    let ville = $('.form-city').val();

    if(ville.length < 1){

        $('.tab').html('<p class="error" style="color:red">Le champ doit contenir au moins 1 caractères</p>');

    }else {
            
        $.ajax({
        type:'GET',
        url: 'https://geo.api.gouv.fr/communes/',
        dataType: 'json',
        data : $(this).serialize(),
        success: function(data){

            let cityTable = $(`
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Codes postaux</th>
                        <th>Population</th>
                        <th>Département</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            `);

            
            data.forEach(function(city){
            
            let newCity = $('<tr></tr>');
            
            let cityNom = $('<td></td>');
            cityNom.text(city.nom);
            
            let cityCodePostaux = $('<td></td>');
            cityCodePostaux.text(city.codepostaux);
            
            let cityPopulation = $('<td></td>');
            cityPopulation.text(city.population);
            
            let cityDepartement = $('<td></td>');
            cityDepartement.text(city.departement);
            
            newCity.append(cityNom);
            newCity.append(cityCodePostaux);
            newCity.append(cityPopulation);
            newCity.append(cityDepartement);
                    
            cityTable.find('tbody').append(newCity);
            
            });
             
                $('.tab').html(cityTable);
                
            },
            error: function(){
                $('form').prepend('<p class="error" style="color:red">Problème de connexion</p>');
            },
            beforeSend: function(){

                setOverlay();

            },
            complete: function(){

                removeOverlay();

            }

        });  
        
    }
    
});


