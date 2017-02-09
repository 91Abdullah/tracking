

$(document).ready(function() {




    $("#tracking-form").on("submit", function(e) {
        
        var cn = $("#cn1").val();
        console.log("CLicked");
        $.ajax({
            url: "http://125.209.97.23:9900/tracking.php",
            method: "POST",
            data: { cn1: cn },
            success: function(data) {
                console.log(data);
                var $response = $(data);
                var query = $(".tracking", data);
                console.log(query);
                $("#track-results").html(query);
                $(".shipment_facts_area").addClass("row");
                $(".snapshotController_help_button").hide();
                $(".left").addClass("col-xs-12 col-md-6");
                $(".right").addClass("col-xs-12 col-md-6");
                $(".fact_table").addClass("table table-bordered table-hover");
                $(".fact_table_row > .label").removeClass("label");
                $(".th_table").addClass("table table-bordered table-hover");
                $(".help_print_link > input").addClass("btn btn-primary");
            },
            error: function(data) {
                console.log(data);
            },
            complete: function(data) {
                //console.log(data);
            }
        });

        e.preventDefault();
    });

})