
    <?php
     $data = file_get_contents('data.json');
     $formatted_data = json_decode($data,true);
     $recipes_array = $formatted_data['recipes'];
    
     $request_method = $_SERVER['REQUEST_METHOD'];
     $uri = $_SERVER['REQUEST_URI'];
    
     $id = $_GET['id'];
     $path = $_GET['path'];

    switch($request_method) {
        case 'GET':
            get_recipes();
            break;
        case 'POST':
            add_new_recipe();
            break;
        case 'PUT':
            update_recipe();
            break;
        case 'DELETE':
            remove_recipe();
            break;
        default: 
            echo json_encode(array('message' => 'An error has occured'));
            break;
    }

    function get_recipes(){
        $path = $GLOBALS['path'];
        if($path==='recipes'){
           if(isset($GLOBALS['id'])){
            foreach ($GLOBALS['recipes_array'] as $element) {
                $target_recipe;
                if($element['id']==$GLOBALS['id']){
                    $target_recipe = $element;
                }
                if (!$target_recipe) $target_recipe = array('message' => 'invalid id');
              }
              echo json_encode($target_recipe); 
           }
           else{
            echo json_encode($GLOBALS['recipes_array']); 
           }
        }else {
          echo json_encode(array('message' => 'invalid path'));
        }
    } 

    function add_new_recipe(){
        echo json_encode(array('message' => 'An error has occured'));
    }

    function remove_recipe(){
        $path = $GLOBALS['parts']['path'];
        if($GLOBALS['parts']['path']==='/recipes'){
         echo 'delete request';
        }
    }
    //  echo '<pre>';
    //  echo '</pre>';
    
    // $write_file_result = file_put_contents('formatted_data.json', $data);
    //  $parsed_url = parse_url($uri);
    //  $query = $parsed_url['query'];
    //  $exploded_query = explode('&',$query);
    //  $exploded_url = explode('/', $parsed_url['path']);
    //  $id = $exploded_url[2]; 
?>

