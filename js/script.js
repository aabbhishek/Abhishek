

function sideNavToggle(){


  let sideNav = document.getElementsByClassName('side-nav')[0];

  if(sideNav.style.left === "125%"){
      openSideLeftRight(true);
      menuToXToggle(true);
  }else{
    openSideLeftRight(false);
    menuToXToggle(false);
  }
}

function openSideLeftRight(position){

  if(position){

    anime({
      targets: '.side-nav',
      left: '75%',
      easing: 'easeInOutQuad',
      duration: 500
    });

  }else{
    anime({
      targets: '.side-nav',
      left: '125%',
      easing: 'easeInOutQuad',
      duration: 500
    });
  }
}

function menuToXToggle(open) {

console.log(open);

  if(open){
    anime({
      targets: '.one',
      rotateZ: 45,
      width:'26px',
      easing: 'easeInOutQuad',
      duration: 500
    });

    document.getElementsByClassName('two')[0].style.display="none";

    anime({
      targets: '.three',
      rotateZ: -45,
      width:'22px',
      easing: 'easeInOutQuad',
      duration: 500
    });
  }else{

    anime({
      targets: '.one',
      rotateZ: 0,
      width:'35px',
      easing: 'easeInOutQuad',
      duration: 500
    });

    setTimeout(()=>{
      document.getElementsByClassName('two')[0].style.display="block";
    },00);

    anime({
      targets: '.three',
      rotateZ: 0,
      width:'35px',
      easing: 'easeInOutQuad',
      duration: 500
    });

  }
}
