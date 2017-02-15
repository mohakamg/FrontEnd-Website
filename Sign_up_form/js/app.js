//Problem: Hints are shown even when the form is valid
//Solution: Hide them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//Hide Hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
  //Find out if password is valid
  if( isPasswordValid() )  {
    //Hide if Valid
    $password.next().hide();
  } else {
    //else Show hint
    $($password).next().show();
  }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation mathch
  if( arePasswordsMatching() ) {
    //hide hint if matched
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmit() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmit);

//When event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmit);



enableSubmit();
