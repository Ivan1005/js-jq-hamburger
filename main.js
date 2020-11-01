// $(".bar").click (function() {
//   $(".header-left , .header-right").hide();
//   $(".hamburger-menu").show();
// });
//
// $(".close").click (function() {
//   $(".header-left , .header-right").show();
//   $(".hamburger-menu").hide();
// });


const app = new Vue ({
  el : '#bar',
  data:{
      bar : false
  },
  methods: {
    showMenu(){
      this.bar = true;
    },
    closeMenu(){
      this.bar = false;
    }
  }
});
