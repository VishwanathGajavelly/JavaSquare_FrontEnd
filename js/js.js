var mod = angular.module('JavaSquare' , []);
mod.controller('JavaSquare', JavaSquare) ;
mod.controller ("CharacterCount", CharacterCount) ;

function CharacterCount(){

}

function JavaSquare() {
  this.flag_courses = false;
  this.flag_java = false;
  this.flag_advjava = false;
  this.flag_spring = false;
  this.flag_hibernate = false;
  this.flag_new_batches = false ;
  this.flag_staff_details = false;
  this.flag_timings = false ;

  this.flag_fee = false ;

  this.toggleCourses = function(){
    this.flag_courses = !(this.flag_courses);
    }

  this.toggleTimings = function(){
    this.flag_timings = !(this.flag_timings);
    }

  this.toggleStaffDetails = function(){
    this.flag_staff_details = !(this.flag_staff_details);
    }

  this.toggleNewBatches = function(){
    this.flag_new_batches = !(this.flag_new_batches);
    }

  this.toggleFee = function(){
    this.flag_fee = !(this.flag_fee);
    }


  this.toggleJava = function(){
    this.flag_java = !(this.flag_java);
    }

  this.toggleAdvJava = function(){
    this.flag_advjava = !(this.flag_advjava);
    }


  this.toggleSpring = function(){
    this.flag_spring = !(this.flag_spring );
    }

  this.toggleSpringMvc = function(){
    this.flag_spring_mvc= !(this.flag_spring_mvc);
    }

  this.toggleHibernate = function(){
    this.flag_hibernate = !(this.flag_hibernate);
    }



}
