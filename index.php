<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
      if(isset($_POST)){
        print_r($_POST);
      }
    ?>
    <h1>Zdravo</h1>
    <form action="index.php" method="POST" enctype="multipart/form-data">
    <div class="row">
        <input type="text" name="ime" required>
        <input type="submit">
    </div>
</form>
</body>
</html>