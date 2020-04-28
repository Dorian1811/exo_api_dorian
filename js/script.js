function setOverlay(){
    $('body').append(`<div class="overlay"><img src="img/ajax-loader.svg"</img></div>`);
}

function removeOverlay(){
    $('.overlay').remove();
}



$('form').submit(function()
{
    e.preventDefault();

    $.ajax({
        type:'GET',
        url: 'https://geo.api.gouv.fr/communes/?nom=lille',
        dataType: 'json',
        success: function(data){
            let communes = $(`
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
    
            data.forEach(function(commune){
    
            let newCommune = $('<tr></tr>');
    
            let communeNom = $('<td></td>');
            communeNom.text(commune.nom);
    
            let communeCodePostaux = $('<td></td>');
            communeCodePostaux.text(communs.codepostaux);
    
            let communePopulation = $('<td></td>');
            communePopulation.text(commune.population);
    
            let communeDepartement = $('<td></td>');
            communeDepartement.text(commune.departement);
    
            newCommune.append(communeNom);
            newCommune.append(communeCodePostaux);
            newCommune.append(communePopulation);
            newCommune.append(communeDepartement);
            
            communes.find('tbody').append(newCommunes);
    
            }); 
            
            $('.tab').html(communes);
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
});


