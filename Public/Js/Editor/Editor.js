//in this array record all the catalog DIV block z-Index information.
//CatalogDivInfo[i][0] is the Div.id
//CatalogDivInfo[i][1] is the Div.style.zIndex
var CatalogDivInfo = new Array();
CatalogDivInfo[0] = new Array("Div_CatalogSetting", 0);

function Test()
{
	//alert("Testing!");
}

/*
Add the new catalog item to the catalog list.
Also add two buttons for delete and edit.
*/
function AddCatalogList( $NewCatalogString )
{
	$Obj = $("#ExistingCatalogList");
	
	//Add the "DIV" tag
	$DivObj = document.createElement("div");
	$DivObj.className = "Div_CatalogListItem";
	$Obj[0].appendChild($DivObj);
	
	//Add the sub "DIV" tag for the text.
	$DivText = document.createElement("div");
	$DivText.className = "TextDiv";
	$DivObj.appendChild($DivText);
	
	//Add the new catalog text information
	$TextString = "Catalog: " + $NewCatalogString + "    ";			
	$AddedObjText = document.createTextNode($TextString);
	$DivText.appendChild($AddedObjText);
	
	//Add delete button
	$DelButton = document.createElement("input");
	$DelButton.type = "button";
	$DelButton.value = "Delete";
	$DelButton.className = "Button";
	$DivObj.appendChild($DelButton);
	
	//Add Edit button
	$EditButton = document.createElement("input");
	$EditButton.type = "button";
	$EditButton.value = "Edit";
	$EditButton.className = "Button";
	$DivObj.appendChild($EditButton);
}

/*
Check the new added catalog name is legal or not.
The new added catalog name cannot be zero, cannot longer than 10 characters,too.
Also need to check the duplication.
*/
function CheckCatalog( $NewCatalogString )
{
	if($CatalogInputString.length == 0)
	{
		alert("Catalog Name cannot be blank!");
		return -1;
	}
	else if($CatalogInputString.length > 10)
	{
		alert("It is too long! Input it one more time.");
		return -1;
	}
	else if(0)
	{
		alert("This catalog name is already exist.");
		return -1;
	}
	else
	{
		return 0;
	}
}

//This function will be called once the user click the catalog tab.
function SwitchToTab()
{
	$ClickedTabName = this.innerHTML;
	
	$DivId = $ClickedTabName;
	if($DivId == "Catalog Setting")
	{
		$DivId = "Div_CatalogSetting";
	}
	
	$TabDiv = document.getElementById($DivId);
	
	//check the CatalogDivInfo array one by one, it maps to the catalog div one by one.
	for(i = 0; i < CatalogDivInfo.length; i++)
	{
		if(CatalogDivInfo[i][1] == 1)
		{
			CatalogDivInfo[i][1] = 0 - i;
			
			$PushBackDiv = document.getElementById( CatalogDivInfo[i][0] );
			$PushBackDiv.style.zIndex = 0 - i;
			$PushBackDiv.style.visibility = "hidden";
			
			break;
		}
		else
		{
			/* To the CatalogSetting Div, the normal zIndex is 0 (not 1) and it is at the top layer, we need to set it to invisible. */
			if(i == (CatalogDivInfo.length - 1))
			{
				$PushBackDiv = document.getElementById( CatalogDivInfo[0][0] );
				$PushBackDiv.style.zIndex = 0;
				$PushBackDiv.style.visibility = "hidden";
			}
			continue;
		}
	}
	
	for(i = 0; i < CatalogDivInfo.length; i++)
	{
		if(CatalogDivInfo[i][0] == $DivId)
		{
			CatalogDivInfo[i][1] = 1;
			$TabDiv.style.zIndex = 1;
			$TabDiv.style.visibility = "visible";
			
			break;
		}
		else
		{
			continue;
		}
	}
}

function AddCatalogTab( $NewCatalogString )
{
	$MenuTabObj = $("#Div_MenuTab");
	if($MenuTabObj.length > 0)
	{
		$Index = 0;
		while(1)
		{
			if($MenuTabObj[0].children[$Index].tagName == "UL")
			{
				$ULObj = $MenuTabObj[0].children[$Index];
				
				$LiObj_1 = document.createElement("Li");
				$LiObj_1.className = "Li_Fence";
				$ULObj.appendChild($LiObj_1);
				
				$LiObj_2 = document.createElement("Li");
				$LiObj_2.innerHTML = $NewCatalogString;
				$LiObj_2.onclick = SwitchToTab;
				$ULObj.appendChild($LiObj_2);
				
				break;
			}
			
			$Index++;
			if($Index >= $MenuTabObj.length)
			{
				break;
			}
		}		
	}
	else
	{
		alert("Add catalog TAB error!");
	}
}

function AddInputFormToCatalogDiv($CatalogDivId)
{
	$CatalogObj = document.getElementById($CatalogDivId);
	
	$CatalogObj.innerHTML = "<div><form><fieldset><legend>Create A New Item</legend><p>Input the new menu item information:</p>Menu	Item name: <input type = 'text' id = 'MenuItemNameInput' /> Menu Item price: <input type = 'text' id = 'MenuItemPriceInput' /> <input type = 'button' value = 'Add' class = 'Button' onclick = 'AddMenuItem()' > </fieldset></form></div>";
}

function AddExistingItemToCatalogDiv()
{
	;
}

function AddCatalogDiv( $CatalogInputString )
{
	$Obj_DivMain = $("#Div_Main");
	
	$Tmp = $Obj_DivMain[0].children.length;
	
	$Obj_New = document.createElement("div");
	$Obj_New.className = "Div_Catalog";
	$Obj_New.id = $CatalogInputString;
	$Obj_New.style.zIndex = (0 - $Tmp);
	$Obj_New.style.visibility = "hidden";
	$Obj_New.innerText = $CatalogInputString;
	$Obj_New.innerHTML = $CatalogInputString;
	
	$Obj_DivMain[0].appendChild($Obj_New);
	
	//Add the information to the "CatalogDivInfo" array
	CatalogDivInfo[CatalogDivInfo.length] = new Array($CatalogInputString, $Obj_New.style.zIndex);
	
	//Add input form to the new catalog DIV block.
	AddInputFormToCatalogDiv($CatalogInputString);
	
	//Add existing items to the catalog DIV block.
	AddExistingItemToCatalogDiv();
}

function AddCatalog()
{
	$CatalogInputString = $("#CatalogInput")[0].value;
	
	if(0 == CheckCatalog( $CatalogInputString ) )
	{
		//Add the new catalog to the catalog list.
		$Obj = $("#ExistingCatalogList");
		if($Obj !=  null)
		{
			//Delete the text string when there is no catalog item in the catalog list.
			if($Obj[0].children[1].tagName == "P")
			{
				$Obj[0].children[1].remove();
			}
			
			//Add the catalog to the list.
			AddCatalogList($CatalogInputString);
			
			//Add the catalog to the Tab
			AddCatalogTab($CatalogInputString);
			
			//Append the DIV block to the "Div_Main" block for the catalog.
			AddCatalogDiv($CatalogInputString);
			
			//alert("Success!");
		}
		else
		{
			alert("Cannot add the new catalog to the list.");
		}
	}
}




