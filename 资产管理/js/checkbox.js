$(".sorting_asc input").click(function() {
  if (this.checked == true) {
    $(".sorting_1 input").each(function() {
      this.checked = true;
    });
  } else {
    $(".sorting_1 input").each(function() {
      this.checked = false;
    });
  }
});
