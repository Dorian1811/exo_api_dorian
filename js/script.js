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
    $('form').find(' .results').remove();

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

            if(data.length == 0){

                $('.tab').html('<p class="error" style="color:red">Aucun résultat</p>');
        
            }else {

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
            
                //console.log(data);
                data.forEach(function(city){
                
                let newCity = $('<tr></tr>');
                
                let cityNom = $('<td></td>');
                cityNom.text(city.nom);
                
                let cityCodePostaux = $('<td></td>');
                cityCodePostaux.html(city.codesPostaux.join('<br>'));
                
                let cityPopulation = $('<td></td>');
                cityPopulation.text(city.population);
                
                let cityCodeDepartement = $('<td></td>');
                cityCodeDepartement.text(city.codeDepartement);
                
                newCity.append(cityNom);
                newCity.append(cityCodePostaux);
                newCity.append(cityPopulation);
                newCity.append(cityCodeDepartement);
                        
                cityTable.find('tbody').append(newCity);
                
                });

                    $('.tab').html(cityTable);
                    
                    $('form').append('<p class="results" style="color:green">Résultats : ' + data.length +'</p>');

            }
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


