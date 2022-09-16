$(function(){
    $('#clean').addClass('on');

  $('.cleanBtn').click(function(){
  $('#clean').addClass('on');
  $('#vegan').removeClass('on');
  $('#crueltyFree').removeClass('on');
  $('#parabenFree').removeClass('on');
  $('#glutenFree').removeClass('on');
  });

  $('.crueltyFreeBtn').click(function(){
  $('#crueltyFree').addClass('on');
  $('#clean').removeClass('on');
  $('#vegan').removeClass('on');
  $('#parabenFree').removeClass('on');
  $('#glutenFree').removeClass('on');
  });

  $('.glutenFreeBtn').click(function(){
  $('#glutenFree').addClass('on');
  $('#clean').removeClass('on');
  $('#vegan').removeClass('on');
  $('#parabenFree').removeClass('on');
  $('#crueltyFree').removeClass('on');
  });

  $('.parabenFreeBtn').click(function(){
  $('#parabenFree').addClass('on');
  $('#clean').removeClass('on');
  $('#vegan').removeClass('on');
  $('#glutenFree').removeClass('on');
  $('#crueltyFree').removeClass('on');
  });

  $('.veganBtn').click(function(){
  $('#vegan').addClass('on');
  $('#clean').removeClass('on');
  $('#glutenFree').removeClass('on');
  $('#parabenFree').removeClass('on');
  $('#crueltyFree').removeClass('on');
  });
  
  });