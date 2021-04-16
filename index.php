<html>
    <!-- <meta http-equiv="refresh" content="20"> -->
    <title>
        Currency convertor
    </title>
    	<link href="style.css" rel="stylesheet">
    	<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">
	<script
  		src="https://code.jquery.com/jquery-3.1.1.min.js"
  		integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  		crossorigin="anonymous"></script>
	<script src="semantic/dist/semantic.min.js"></script>
    	<script src="sample.js"></script>
    <body>
	<div class = "ui segment">
		<div class="top-bar">
            <h1 class="header">Currency Convertor</h1>
            
        </div>
        <div class="frosted">
            <p id="obs-date" style="text-align: left;padding-left: 3px;"> *</p>
	<div class = "right tooltip">
                How to use?
                <span class="tooltiptext">
                    Enter a number in the field opposite to the value you want to convert, and click the convert button. For a reuse, erase the field you want to use and repeat the above step.
                </span>
            </div>   
	 <form name="converter">
                <table>
                <tr>
                <td>Australian Dollar: </td><td><input type="text" name="asd" onChange="asdConverter()" /></td>
		        <td>Icelandic Krona: </td><td><input type="text" name="isk" onChange="iskConverter()" /></td>
                <td>Pound Sterling: </td><td><input type="text" name="pound" onChange="poundConverter()" /></td>
                </tr>
                <tr>
                <td>Brazilian Real: </td><td><input type="text" name="brl" onChange="brlConverter()" /></td>
                <td>Indian Rupee: </td><td><input type="text" name="rupee" onChange="rupeeConverter()" /></td>
		        <td>Romenian Leu: </td><td><input type="text" name="ron" onChange="ronConverter()" /></td>
					</tr>
                <tr>
                <td>Bulgarian Lev: </td><td><input type="text" name="bgn" onChange="bgnConverter()" /></td>
                <td>Indonesian Rupee: </td><td><input type="text" name="idr" onChange="idrConverter()" /></td>
                <td>Russian Ruble: </td><td><input type="text" name="ruble" onChange="rubleConverter()" /></td>
                </tr>
                <tr>
                <td>Canadian Dollar: </td><td><input type="text" name="cad" onChange="cadConverter()" /></td>
                <td>Israeli New Shekel: </td><td><input type="text" name="isl" onChange="islConverter()" /></td>
                <td>Singaporean Dollar:</td><td><input type="text" name="sgd" onChange="sgdConverter()" /></td>
                </tr>
                <tr>
                    <td>Chinese Yuan: </td><td><input type="text" name="yuan" onChange="yuanConverter()" /></td>
                    <td>Japanese Yen: </td><td><input type="text" name="yen" onChange="yenConverter()" /></td>
                    <td>South African Rand: </td><td><input type="text" name="zar" onChange="zarConverter()" /></td>
                </tr>
                <tr>
                    <td>Croatian Kuna: </td><td><input type="text" name="hrk" onChange="hrkConverter()" /></td>
                    <td>Malaysian Ringgit: </td><td><input type="text" name="ringgit" onChange="ringgitConverter()" /></td>
                    <td>South Korean Won: </td><td><input type="text" name="won" onChange="skwConverter()" /></td>
                </tr>
                <tr>
                    <td>Czech Koruna: </td><td><input type="text" name="czk" onChange="czkConverter()" /></td>
                    <td>Mexican Peso: </td><td><input type="text" name="peso" onChange="pesoConverter()" /></td>
                    <td>Swedish Krona: </td><td><input type="text" name="sek" onChange="sekConverter()" /></td>
                </tr>
                <tr>
                    <td>Danish Krone: </td><td><input type="text" name="dkk" onChange="dkkConverter()" /></td>
                    <td>Norwegian Krone: </td><td><input type="text" name="nok" onChange="nokConverter()" /></td>
                    <td>Swiss Franc: </td><td><input type="text" name="franc" onChange="francConverter()" /></td>
                </tr>
                <tr>
                    <td>Euro: </td><td><input type="text" name="euro" onChange="euroConverter()" /></td>
                    <td>New Zealand Dollar: </td><td><input type="text" name="nzd" onChange="nzdConverter()" /></td>
                    <td>Thai Baht: </td><td><input type="text" name="thb" onChange="thbConverter()" /></td>
                </tr>
                <tr>
                    <td>Hong Kong Dollar: </td><td><input type="text" name="hkd" onChange="hkdConverter()" /></td>
                    <td>Philippine Peso: </td><td><input type="text" name="php" onChange="phpConverter()" /></td>
                    <td>Turkish Iira: </td><td><input type="text" name="tri" onChange="triConverter()" /></td>
                </tr>
                <tr>
                    <td>Hungarian Forint: </td><td><input type="text" name="huf" onChange="hufConverter()" /></td>
                    <td>Polish Złoty: </td><td><input type="text" name="pln" onChange="plnConverter()" /></td>
                    <td>US Dollar: </td><td><input type="text" name="dollar" onChange="dollarConverter()" /></td>
                </tr>
                <tr>
                <td colspan="6" align="center"><input type="button" value="Convert!" /></td>
                </tr>
                </table>
		</form>
        
        </div>	
		<p>For a second version (simpler but static), <a href='https://github.com/pradeepa45/currency-converter-static'>Visit this link</a></p>
	</div>
    </body>
</html>
