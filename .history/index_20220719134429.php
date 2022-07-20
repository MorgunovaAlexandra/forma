<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <link rel="stylesheet" href="./style.css"></link>
    <title>Document</title>
</head>
<body>
    <div class="wrapper">
       <Sidebar class="sidebar">
        <div class="sidebar__title">Sign up</div>
       </Sidebar>
        <div class="main">
            <div class="main__header">New user?</div>
            <div class="main__text">Use the form below to create your account.</div>
            <div class="form">
            <div class="ride__side">
                <form method="post" action="send.php">
    
                    <label class="text-field__label" for="name">First Name</label>
                    <input class="text-field__input" type="text" placeholder="Alice" name="name" id="name">
                    <label class="text-field__label nation" for="nationality">Nationality</label>
                    <select name="nationality" class="text-field__input"name="user_profile_color_1" id="nationality">
                        <option value="1">American</option>
                        <option value="2">Belarus</option>
                        <option value="3">Russia</option>
                        <option value="4">German</option>
                      </select>
                      <div class="fallbackDatePicker">
                        <span>
                          <label  class="text-field__label birdth" for="day">Date of Birth</label>
                          <select class="field__day" id="day" name="day">
                          </select>
                        </span>
                        <span>
                         
                          <select  class="field__mounth" id="day" name="month">
                            <option selected>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>
                        </span>
                        <span>
                          <select  class="year" id="day" name="year">
                          </select>
                        </span>
    
                      </div>
                      <label class="text-field__label pass" for="password">Password</label>
                      <input class="text-field__input" type="password" id="password" name="password">
                      <div class="logger">
                         <div>Have an account? <a href="#">Login</a></div>
                      </div>
            </div>
            <div class="left__side">
                <label class="text-field__label" for="name">Last Name</label>
                <input class="text-field__input" type="text" placeholder="Miller" id="name" name="lastName">
                <div class="emailInput">
                    <label class="text-field__label label-email" for="email">E-mail</label>
                    <input class="input__email" type="email" id='email'name="email" required placeholder="alice.miller@yahoo.com">
                    <img  class="img__done" src="./svg/Shape.svg">
                </div>
                <div class="radioInput">
                   <div class="text-field__label title__radio">Gender</div>
                        <input type="radio" name="radio" id="radio1" />
                        <label for="radio1">Male</label>
                      
                        <input type="radio" name="radio" id="radio2" />
                        <label for="radio2">Female</label>
                   
                     
                </div>
                <div class="confirm__password">
                    <label class="text-field__label pass" for="password">Confirm Password</label>
                    <input class="text-field__input" type="password" id="password" name="confirmPassword">
                </div>
               
               <button type="submit">Complete Signup</button>
           
            </div>
           
            </form>
        </div>
        <img class="chel" src="./svg/noun_925550.svg">
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
    <script src="./emaiValidater.js"></script>
    <script src="./script.js"></script>
</body>
</html>