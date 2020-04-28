<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Exo api</title>
    <style>
        .tab{
            border: 2px solid black;
            min-height: 400px;
            width: 50%;
            margin: auto;
            padding-top: 25px;
            padding-bottom: 25px;
        }
        .butons{
            text-align: center;
            padding-bottom: 10px;
        }
        .error{
            color: red;
            text-align: center;
        }
        table tr td, table tr th{
            padding: 10px;
            text-align: center;
            
        }
        table{
            margin: auto;
            width: 100%;
        }
        .overlay{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0,0,0,0.6);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        h1{
            text-align: center;
        }
        .base-url
        {
            text-align: center;
            font-size: 20px;
        }
    </style>
</head>
<body>
    
    <h1>Récupérer les infos d'une ville à partir de l'api :<br><a href="https://api.gouv.fr/api/api-geo.html">https://api.gouv.fr/api/api-geo.html</a></h1>
    

    <p class="base-url">URL de base :<br>https://geo.api.gouv.fr/communes/?nom=VILLE</p>

    <div class="butons">

        <form action="https://geo.api.gouv.fr/communes/" method="GET">

            <input type="text" name="nom" class="form-city" placeholder="Nom de ville">

            <button>Envoyer</button>

        </form>

    </div>


    <div class="tab">
    
    </div>



    <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>