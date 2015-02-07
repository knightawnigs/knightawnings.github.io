this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["awning_list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"slide\">\r\n  <a href=\"#"
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"thumbnail\">\r\n    <div class=\"image-container\">\r\n      <img data-img-src=\""
    + escapeExpression(lambda((depth0 != null ? depth0.icon : depth0), depth0))
    + "\" id=\"thumbimg-"
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"lazy item-thumbnail\" alt=\""
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n    </div>\r\n    <div class=\"caption\">\r\n      <p>"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</p>\r\n    </div><!-- .caption -->\r\n  </a><!-- .thumbnail -->\r\n</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.sections : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["dialog_gallery"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  <a class=\"rsImg\" data-rsBigImg=\""
    + escapeExpression(lambda((depth0 != null ? depth0.bigImg : depth0), depth0))
    + "\" href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.bigImg : depth0), depth0))
    + "\">"
    + escapeExpression(lambda((depth0 != null ? depth0.caption : depth0), depth0))
    + "<img width=\"96\" height=\"72\" class=\"rsTmb\" src=\""
    + escapeExpression(lambda((depth0 != null ? depth0.icon : depth0), depth0))
    + "\" /></a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"product-gallery\" class=\"royalSlider rsDefault\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.images : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["dialog_toolbar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<button id=\"dialog-desc-button\" type=\"button\" class=\"close\" aria-hidden=\"true\" style=\"left: 5px;width: 100px;font-size: 15px;\" onclick=\"loadDesc('"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "')\">Description</button>\r\n<button id=\"dialog-gallery-button\" type=\"button\" class=\"close\" aria-hidden=\"true\"style=\"left: 79px;width: 100px;font-size: 15px;\" onclick=\"loadGallery('"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "')\">Gallery</button>";
},"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["list_products"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<article id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"section-wrapper clearfix\" data-custom-background-img=\""
    + escapeExpression(lambda((depth0 != null ? depth0.bgimg : depth0), depth0))
    + "\">\r\n  <div class=\"content-wrapper clearfix\">\r\n    <div class=\"col-sm-11 pull-right\">\r\n\r\n      <h1 class=\"section-title\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h1>\r\n\r\n\r\n      <!-- feature columns -->\r\n      <section class=\"feature-columns row clearfix\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.products : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </section><!-- end: .feature-columns -->\r\n\r\n      <!-- End: Section content to edit -->\r\n\r\n    </div><!-- .col-sm-10 -->\r\n  </div><!-- .content-wrapper -->\r\n</article><!-- .section-wrapper -->\r\n";
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        <!-- feature 1 -->\r\n        <article class=\"feature-col col-md-4\" style=\"float: right\">\r\n          <a href=\"#\" onclick=\"loadContent('"
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "', function(){populate_and_open_modal(event, 'modal-content-8', '', 'full-size');});\" class=\"thumbnail linked\">\r\n            <div class=\"image-container\">\r\n              <img data-img-src=\""
    + escapeExpression(lambda((depth0 != null ? depth0.icon : depth0), depth0))
    + "\" class=\"lazy item-thumbnail\" alt=\""
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n            </div>\r\n            <div class=\"caption\">\r\n              <h5>"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h5>\r\n              <p>"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</p>\r\n            </div><!-- .caption -->\r\n          </a><!-- .thumbnail -->\r\n\r\n        </article>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.sections : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<article id=\"contact\" class=\"section-wrapper clearfix\" data-custom-background-img=\"images/awnings-1620/home_ment/bg_contact.jpg\">\r\n  <div class=\"content-wrapper clearfix\">\r\n\r\n    <h1 class=\"section-title\">Contact</h1>\r\n\r\n    <!-- CONTACT DETAILS -->\r\n    <div class=\"contact-details col-sm-5 col-md-3\">\r\n      <p>Tel: 1300 789 886 <br> 0405 315 998</p>\r\n      <p><a href=\"mailto:info@knightawnings.com.au\">info@knightawnings.com.au</a></p>\r\n    </div>\r\n    <!-- END: CONTACT DETAILS -->\r\n\r\n    <!-- CONTACT FORM -->\r\n    <div class=\"col-sm-7 col-md-9\">\r\n      <!-- IMPORTANT: change the email address at the top of the assets/php/mail.php file to the email address that you want this form to send to -->\r\n      <form class=\"form-style validate-form clearfix\" action=\"php/mail.php\" method=\"POST\" role=\"form\">\r\n\r\n        <!-- form left col -->\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"text-field form-control validate-field required\" data-validation-type=\"string\" id=\"form-name\" placeholder=\"Full Name\" name=\"name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"email\" class=\"text-field form-control validate-field required\" data-validation-type=\"email\" id=\"form-email\" placeholder=\"Email Address\" name=\"email\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"tel\" class=\"text-field form-control validate-field phone\" data-validation-type=\"phone\" id=\"form-contact-number\" placeholder=\"Contact Number\" name=\"contact_number\">\r\n          </div>\r\n        </div><!-- end: form left col -->\r\n\r\n        <!-- form right col -->\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <textarea placeholder=\"Message...\" class=\"form-control validate-field required\" name=\"message\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <img src=\"images/theme_images/loader-form.GIF\" class=\"form-loader\">\r\n            <button type=\"submit\" class=\"btn btn-sm btn-outline-inverse\">Submit</button>\r\n          </div>\r\n          <div class=\"form-group form-general-error-container\"></div>\r\n        </div><!-- end: form right col -->\r\n\r\n      </form>\r\n    </div><!-- end: CONTACT FORM -->\r\n\r\n  </div><!-- .content-wrapper -->\r\n</article><!-- .section-wrapper -->\r\n<div class=\"content-to-populate-in-modal\" id=\"modal-content-8\">\r\n  <!-- content here -->\r\n</div><!-- #modal-content-8 -->";
},"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["main_menu"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  <li id=\"menu-item-"
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"menu-item scroll\"><a href=\"#"
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</a></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.sections : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<li id=\"menu-item-straight-contact\" class=\"menu-item scroll\"><a href=\"#contact\">Contact</a></li>";
},"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_antares_tenstion_system"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Antares Tenstion System</h1>\r\n<p>retractable exterior vertical sunscreen systems from Europe</p>\r\n<p>retractable exterior vertical sunscreen systems from Europe with neat slim-line cassettes.  They are operated by amanual gearbox and crank handle or motorised.  The base rail travels up and down with spring tension  with side tracks.</p>\r\n";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_convertable_awnings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Convertable Awnings</h1>\r\n<p>Is traditional Australian pivot arm awning ideally suited to match with traditional houses such as Federation style. They are operated by a cord and reel system with pivot arms.</p>\r\n\r\n";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_cord_and_reel"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Cord and Reel</h1>\r\n<p>Traditional Australian straight drop awning</p>\r\n<p>Traditional Australian straight drop awning ideally suited to match with traditional houses such as Federation style.  They are operated by a cord and reel system.\r\n</p>\r\n";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_drop"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Drop Awnings</h1>\r\n<p>are very robust external gear operated sunscreen systems.  The Drop awning has no side guides or channels, so it does not interfere with architectural fretwork and post mouldings.  Drop awning can also be motorised.</p>\r\n";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_eureka_belt_system"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Eureka Belt System</h1>\r\n<p>\r\n  Large Patios or Terraces... We've got you covered\r\n</p>\r\n<p>\r\n  · Shade over a glass roof\r\n</p>\r\n<p>\r\n  · Large areas of shade over a patio or Pergola\r\n</p>\r\n<p>\r\n  · Rugged construction\r\n</p>\r\n<p>\r\n  · Electric operation with optional remote or automatic control\r\n</p>\r\n<p>\r\n</p>\r\n<p>\r\n  The side guides can be mitered to allow the Eureka belt system to cover the vertical face of the glass as well as the sloping section. The side guides can\r\n  be curved to follow barrel vaulted roofs or to provide horizontal and vertical shade over a patio with one awning.\r\n</p>";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_family_basic"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Family Basic</h1>\r\n<p>\r\n  Best-selling awning without a cassette. Made to a much higher specification than other ‘non-cassette’ awnings on the market (stronger torsion bar, thicker\r\n  arms, heavier fabric etc).\r\n</p>\r\n<p>\r\n  <img width=\"780\" height=\"313\" src=\"images/desc_images/family02gr.jpg\"/>\r\n</p>\r\n<p>\r\n  Available as an open awning (Family) or a close-fitting semi-cassette (Family Basic)\r\n</p>\r\n<ul type=\"disc\">\r\n  <li>\r\n    Fabric cover shell (optional) offers an elegant solution for concealing the fabric roller\r\n  </li>\r\n  <li>\r\n    Vario valance (optional) with a valance height of 150 or 200 cm can be supplied\r\n  </li>\r\n  <li>\r\n    Hinged aluminium arms with plastic-coated double cables for an extremely long service life\r\n  </li>\r\n  <li>\r\n    Front profile sits close to the case (family basic)\r\n  </li>\r\n  <li>\r\n    The plastic end caps can be colour-matched to the awning fabric\r\n  </li>\r\n</ul>\r\n<p>\r\n  Technical features\r\n</p>\r\n<p>\r\n  <strong>Width</strong>\r\n  <br/>\r\n  Up to 650 cm with 2 hinged arms\r\n  <br/>\r\n  Up to 700 cm with 3 hinged arms\r\n  <br/>\r\n  Up to 1300 cm, 2 units linked with 4 hinged arms\r\n  <br/>\r\n  Up to 1950 cm, 3 units linked with 6 hinged arms\r\n</p>\r\n<p>\r\n  <strong>Arm lengths</strong>\r\n  <br/>\r\n  150/200/250/300/350/400 cm\r\n  <br/>\r\n  Special lengths on request\r\n</p>\r\n<p>\r\n  <strong>Drive</strong>\r\n  <br/>\r\n  Electric motor fitted as standard, bevel gear available on request (price reduction).\r\n  <br/>\r\n  On single units 651 - 700 cm, units with 3 hinged arms and linked units always electric motor.\r\n</p>\r\n<p>\r\n  <strong>Special equipment</strong>\r\n  <br/>\r\n  Sun and wind sensor, radio control, Vario valance, lighting, Lewens-Matik\r\n  <br/>\r\n  (pitch adjustment gear unit).\r\n</p>\r\n<p>\r\n  Fitting Options\r\n</p>\r\n<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"625\">\r\n  <tbody>\r\n  <tr>\r\n    <td>\r\n      <p>\r\n        <img width=\"194\" height=\"161\" src=\"images/desc_images/family_basic_fitting_options01.png\" alt=\"Wall fitting\"/>\r\n      </p>\r\n    </td>\r\n    <td>\r\n      <p>\r\n        <img width=\"165\" height=\"209\" src=\"images/desc_images/family_basic_fitting_options02.png\" alt=\"Ceiling fitting\"/>\r\n      </p>\r\n    </td>\r\n    <td>\r\n      <p>\r\n        <img width=\"164\" height=\"216\" src=\"images/desc_images/family_basic_fitting_options03.png\" alt=\"Rafter fitting\"/>\r\n      </p>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_family_design"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Family Design</h1>\r\n<p>\r\n  Mid-range awning, offering a cassette and the option of an electric motor, all at a very good price.\r\n</p>\r\n<p>\r\n  <img width=\"780\" height=\"403\" src=\"images/desc_images/family_design01.jpg\"/>\r\n</p>\r\n<p>\r\n  awning teams outstanding technical features and modern design with the appearance of a cassette awning.\r\n</p>\r\n<ul type=\"disc\">\r\n  <li>\r\n    Front profile with very sturdy double hollow chamber.\r\n  </li>\r\n  <li>\r\n    Operating components largely concealed by the generous front profile.\r\n  </li>\r\n  <li>\r\n    Integral rain gutter, water drains off at the sides through the end caps.\r\n  </li>\r\n  <li>\r\n    Front profile always sits close to the case.\r\n  </li>\r\n  <li>\r\n    A 40 x 40 x 2 mm console tube, galvanized and powder-coated, is used.\r\n  </li>\r\n  <li>\r\n    Rust-resistant pins in Teflon-coated bearings.\r\n  </li>\r\n  <li>\r\n    High-grade steel screws\r\n  </li>\r\n  <li>\r\n    Valance available as an optional extra\r\n  </li>\r\n</ul>\r\n<p>\r\n  Technical features\r\n</p>\r\n<p>\r\n  <strong>Width</strong>\r\n  <br/>\r\n  Up to 650 cm with 2 hinged arms\r\n  <br/>\r\n  Up to 700 cm with 3 hinged arms\r\n  <br/>\r\n  Up to 1300 cm, 2 units linked with 4 hinged arms\r\n  <br/>\r\n  Up to 1950 cm, 3 units linked with 6 hinged arms\r\n</p>\r\n<p>\r\n  <strong>Arm lengths</strong>\r\n  <br/>\r\n  150/200/250/300/350/400 cm\r\n  <br/>\r\n  Special lengths on request\r\n</p>\r\n<p>\r\n  <strong>Drive</strong>\r\n  <br/>\r\n  Electric motor fitted as standard, bevel gear available on request (price reduction). On single units 651 - 700 cm, units with 3 hinged arms and linked\r\n  units always electric motor.\r\n</p>\r\n<p>\r\n  <strong>Special equipment</strong>\r\n  <br/>\r\n  Sun and wind sensor, radio control.\r\n</p>\r\n<p>\r\n  Fitting Options\r\n</p>\r\n<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"625\">\r\n  <tbody>\r\n  <tr>\r\n    <td>\r\n      <p>\r\n        <img width=\"194\" height=\"148\" src=\"images/desc_images/family_design02.png\" alt=\"Wall fitting\"/>\r\n      </p>\r\n    </td>\r\n    <td>\r\n      <p>\r\n        <img width=\"166\" height=\"200\" src=\"images/desc_images/family_design03.png\" alt=\"Ceiling fitting\"/>\r\n      </p>\r\n    </td>\r\n    <td>\r\n      <p>\r\n        <img width=\"167\" height=\"206\" src=\"images/desc_images/family_design04.png\" alt=\"Rafter fitting\"/>\r\n      </p>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_family_kompakt"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Family Kompakt</h1>\r\n<p>\r\n  Top of the range, ultra- modern heavy duty awning, ideal for residential and commercial use. The strongest of all our awnings; thick steel cables enable\r\n  them to withstand strong winds.\r\n</p>\r\n<p>\r\n  <img width=\"780\" height=\"398\" src=\"images/desc_images/family_kompakt01.png\"/>\r\n</p>\r\n<p>\r\n  An easy-to-operate cassette awning incorporating proven technical features\r\n</p>\r\n<p>\r\n  The following models are available:\r\n</p>\r\n<p>\r\n  <strong>Family Kompakt Type C</strong>\r\n  , closed on 3 sides\r\n</p>\r\n<p>\r\n  <strong>Family Kompakt Type D</strong>\r\n  , closed on 4 sides, with unique protective fabric casing\r\n</p>\r\n<ul type=\"disc\">\r\n  <li>\r\n    Fabric and components protected against moisture and weather.\r\n  </li>\r\n  <li>\r\n    Arm bracket of high-strength aluminium alloy.\r\n  </li>\r\n  <li>\r\n    Upper arm fork of forged aluminium.\r\n  </li>\r\n  <li>\r\n    Sturdy front profile with double hollow chamber and integral rain gutter.\r\n  </li>\r\n  <li>\r\n    Hinged arms of aluminium with plastic-coated double cables for an extremely long service life.\r\n  </li>\r\n  <li>\r\n    Rust-resistant pins in Teflon-coated bearings.\r\n  </li>\r\n  <li>\r\n    High-grade steel screws.\r\n  </li>\r\n</ul>\r\n<p>\r\n  Technical features\r\n</p>\r\n<p>\r\n  <strong>Width</strong>\r\n  <br/>\r\n  Up to 650 cm with 2 hinged arms\r\n  <br/>\r\n  Up to 1300 cm, 2 units linked with 4 hinged arms\r\n  <br/>\r\n  Up to 1950 cm, 3 units linked with 6 hinged arms\r\n</p>\r\n<p>\r\n  <strong>Arm lengths</strong>\r\n  <br/>\r\n  150/200/250/300/350 cm\r\n  <br/>\r\n  Special lengths on request\r\n</p>\r\n<p>\r\n  <strong>Drive</strong>\r\n  <br/>\r\n  Electric motor fitted as standard, bevel gear available on request (price reduction).\r\n  <br/>\r\n  On linked units always electric motor.\r\n</p>\r\n<p>\r\n  <strong>Special equipment</strong>\r\n  <br/>\r\n  Sun and wind sensor, radio control.\r\n</p>\r\n<p>\r\n  Fitting Options\r\n</p>\r\n<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"625\">\r\n  <tbody>\r\n  <tr>\r\n    <td>\r\n      <p>\r\n        <img width=\"194\" height=\"161\" src=\"images/desc_images/family_kompakt02.png\" alt=\"Wall fitting\"/>\r\n      </p>\r\n    </td>\r\n    <td>\r\n      <p>\r\n        <img width=\"169\" height=\"219\" src=\"images/desc_images/family_kompakt03.png\" alt=\"Ceiling fitting\"/>\r\n      </p>\r\n    </td>\r\n    <td>\r\n      <p>\r\n        <img width=\"180\" height=\"239\" src=\"images/desc_images/family_kompakt04.png\" alt=\"Rafter fitting\"/>\r\n      </p>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_fixed_wire_guide_drop"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Fixed Wire Guide Drop</h1>\r\n<p>A spring loaded cord operated blind excellent for upstairs windows, over glassed skylight or pergola.</p>\r\n<p>The choice of galvanised, powder coated  or s/steel rods or cable guides available.</p>\r\n<p>Comes with  standard Colorbond headbox hooding in various fabric types from traditional and acrylic canvas to woven PVC coated mesh.</p>\r\n<p>Optionally operated from the outside with cord and pulleys, or conveniently motorised. For ground floor applications the blind can be operated by a crank handle with addition of a gear box.</p>\r\n<p>Motorisation further allows individual or group control over a number of windows simultaneously, timer function and climate sensor. Awnings fitted with an electric motor are as easy and comfortable to use as a touch of a button.</p>\r\n\r\n";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_millennium"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Millennium</h1>\r\n<h3>\r\n  Top of the range, ultra- modern heavy duty awning, ideal for residential and commercial use. The strongest of all our awnings.\r\n</h3>\r\n<h3>\r\n</h3>\r\n<h3>\r\n  <img width=\"780\" height=\"353\" src=\"images/desc_images/millennium01.png\"/>\r\n</h3>\r\n<h3>\r\n</h3>\r\n<p>\r\n  is a durable, high-quality awning, elegantly styled and with refined technical features.\r\n</p>\r\n<ul type=\"disc\">\r\n  <li>\r\n    Compact dimensions of just 170 mm in height and 249 mm deep.\r\n    <br/>\r\n    The maximum area of a single unit is 650 cm wide with an arm length of 400 cm if 2 arms are fitted, or 700 cm wide with an arm length of 350 cm if 3\r\n    arms are fitted.\r\n  </li>\r\n  <li>\r\n    Fabric and components optimally protected by a cassette that is closed on all sides.\r\n  </li>\r\n  <li>\r\n    Extremely high spring tension of the hinged arms ensures a superbly taut sit of the fabric.\r\n  </li>\r\n  <li>\r\n    Integral fabric cover shell offers an elegant solution for concealing the fabric roller.\r\n  </li>\r\n  <li>\r\n    Hinged arms of aluminium with plastic-coated double cables for an extremely long service life.\r\n  </li>\r\n  <li>\r\n    Arm bracket of extruded, high-strength aluminium alloy.\r\n  </li>\r\n  <li>\r\n    Upper arm fork of forged aluminium.\r\n  </li>\r\n  <li>\r\n    High-grade steel screws.\r\n  </li>\r\n  <li>\r\n    Shaped end caps for an enhanced appearance\r\n  </li>\r\n</ul>\r\n<p>\r\n  Technical features\r\n</p>\r\n<p>\r\n  <strong>Width</strong>\r\n  <strong>\r\n    <br/>\r\n  </strong>\r\n  Up to 650 cm with 2 hinged arms\r\n  <br/>\r\n  Up to 700 cm with 3 hinged arms\r\n  <br/>\r\n  Up to 1300 cm, 2 units linked with 4 hinged arms\r\n  <br/>\r\n  Up to 1950 cm, 3 units linked with 6 hinged arms\r\n</p>\r\n<p>\r\n  <strong>Arm lengths</strong>\r\n  <strong>\r\n    <br/>\r\n  </strong>\r\n  150/200/250/300/350/400 cm\r\n  <br/>\r\n  Special lengths on request\r\n</p>\r\n<p>\r\n  <strong>Drive</strong>\r\n  <strong>\r\n    <br/>\r\n  </strong>\r\n  Electric motor fitted as standard, bevel gear available on request (price reduction). On single units 651 - 700 cm, units with 3 hinged arms and linked\r\n  units always electric motor.\r\n</p>\r\n<p>\r\n  <strong>Special equipment</strong>\r\n  <strong>\r\n    <br/>\r\n  </strong>\r\n  Sun and wind sensor, radio control.\r\n</p>\r\n<p>\r\n  Fitting Options\r\n</p>\r\n<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"625\">\r\n  <tbody>\r\n  <tr>\r\n    <td>\r\n      <p>\r\n        <img width=\"169\" height=\"109\" src=\"images/desc_images/millennium02.png\" alt=\"Wall fitting\"/>\r\n      </p>\r\n    </td>\r\n    <td>\r\n      <p>\r\n        <img width=\"185\" height=\"196\" src=\"images/desc_images/millennium03.png\" alt=\"Ceiling fitting\"/>\r\n      </p>\r\n    </td>\r\n    <td>\r\n      <p>\r\n        <img width=\"196\" height=\"226\" src=\"images/desc_images/millennium04.png\" alt=\"Rafter fitting\"/>\r\n      </p>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td>\r\n      <p>\r\n        Wall\r\n      </p>\r\n    </td>\r\n    <td>\r\n      <p>\r\n        Ceiling\r\n      </p>\r\n    </td>\r\n    <td>\r\n      <p>\r\n        Rafter\r\n      </p>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_retractable_pergolas"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Retractable Pergolas</h1>\r\n<p>THE NEW GENERATION OF RETRACTABLE PERGOLAS AND ROOF SYSTEMS</p>\r\n<p>Suntech’s range of architectural retractable pergolas and roof systems are suitable for use in any weather conditions for a large range of residential and commercial applications. Whether it’s a retractable pergola for your backyard, courtyard or deck that you’re looking for or a custom made roof system to meet the needs of a restaurant, bar or commercial project there is a Suntech model to suit. Designed and built using only the highest quality materials Suntech systems are manufactured to size for every project and offer a wind rating up to W32 (117km/h) to withstand even the harshest elements . Suntech systems are available in widths up to 13m and maximum projection of 10m in one fabric so providing a solution to cover areas up to 130sq meters at the touch of a button has never been easier. Linking systems is also possible and made easy by our patented joining system that ensures 100% waterproof join every time. Utilising European technology through a custom direct drive motor system to ensure smooth and quick operation coupled with high grade extruded aluminium profiles, stainless steel components and a second to none running system is why Suntech is at the forefront of our industry worldwide. The fire rated and 100% waterproof PVC fabric provides maximum stability and resistance to temperature, moisture and dirt. It doesn’t shrink or bag, and the acrylic top coating makes it very easy to clean. High quality, low wick polyester yarns in the base fabric prevent bacteria, mould and fungus growth for years of low maintenance.</p>\r\n";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_robusta_awnings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Robusta Awnings</h1>\r\n<p>\r\n  With a durable roller tube and sturdy drop arms, Robusta is a solid window awning especially suited for larger windows. A stylish aluminium hood protects\r\n  the fabric and roller tube from the elements. External or internal operation by crank, but motorisation is available as an option. Specially designed drop\r\n  arms and slide rails can convert Robusta into a balcony awning.\r\n</p>\r\n<p>\r\n  Robusta Fabric Awnings are designed for larger window areas or high wind areas. They can be operated both externally and internally, by crank or motor; and\r\n  are constructed from heavy duty extruded aluminium for added strength and durability.\r\n  <img width=\"222\" height=\"175\" src=\"images/desc_images/robusta01.png\" align=\"right\" alt=\"fa_rob\"/>\r\n</p>\r\n<p>\r\n  The Sliding arm option extends the projection of your awning and provides additional shade where you want it most.\r\n</p>";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_system_2000"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>System 2000 pivot Awnings</h1>\r\n<p>are very adaptable systems that can be designed to suit a wide range of needs.  Custom designed and made with many variations and control options – including tape, cord, gear or electric, even wireless remote.  System 2000 pivot awning  is ideal for smaller protection requirements.</p>\r\n";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_system_2000_lock_arm"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>System 2000 Lock Arm</h1>\r\n<p>A perfect choice for close fitting to windows on the ground floor or onto a balcony. LUXAFLEX® Automatic Awnings minimise space with its minimal projection.</p>\r\n\r\n<p>Easy to use self locking arms allow simple adjustment by hand or by a pull stick.  LUXAFLEX® Automatic Locking Arm Awnings are a very popular design to provide you with an affordable solution to shade and protect your windows to keep your home cool in summer. They operate on fixed guide rods with easy function self locking arms.</p>\r\n<p>The awning hood is available in a range of colours to allow for design integration with the exterior of your home and also assists in the protection of the fabric from the weather when not in use.\r\n</p>\r\n";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_titan"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Titan</h1>\r\n<p>Great value economy model at a cracking price. Made to a slightly better specification than most other ‘budget’ awnings on the market.</p>\r\n";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["product_verandah_straight_drop"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Verandah Straight Drop</h1>\r\n<p>\r\n  Is Old-style roll-up blind.\r\n</p>\r\n<p>\r\n  Fixed at the top by aluminium sail track, this drop blind can be manually rolled up and down using the rope and pulley.\r\n  <br/>\r\n  The rope loops around a bottom bar on the left and right of the blind and is then attached to a pulley on one side. Zips can also be added to these blinds\r\n  to stop any movement down the sides and create a snug/room effect.\r\n  <br/>\r\n  Great solution for the sloping veranda roof where no other systems can be used.\r\n</p>\r\n<h2>\r\n  Also able to have Clear PVC Café blinds\r\n</h2>\r\n<p>\r\n  Clear PVC Café blinds give you protection from the elements without obstructing your view. They are operated by a rope and pulley system.\r\n</p>";
  },"useData":true});;
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["test"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h1>"
    + escapeExpression(((helper = (helper = helpers.test || (depth0 != null ? depth0.test : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"test","hash":{},"data":data}) : helper)))
    + "</h1>";
},"useData":true});;
/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
window.xs_screen_max=768;window.sm_screen_max=992;function viewport(){var c=window,b="inner";if(!("innerWidth" in window)){b="client";c=document.documentElement||document.body}return{width:c[b+"Width"],height:c[b+"Height"]}}function toggle_main_menu(){if(viewport().width<=window.xs_screen_max){var a=$("#left-sidebar #mobile-menu-icon");var b=$("#left-sidebar #main-menu");if(b.is(":visible")){b.addClass("menu_closed_on_xs").removeClass("menu_opened_on_xs").slideUp("fast",function(){a.removeClass("active")})}else{b.addClass("menu_opened_on_xs").removeClass("menu_closed_on_xs").slideDown("fast",function(){a.addClass("active")})}}}function main_menu_visiblity_on_resize(){var a=$("#left-sidebar #main-menu");if(viewport().width>window.xs_screen_max){if(a.hasClass("menu_closed_on_xs")){a.show()}}else{if(a.hasClass("menu_closed_on_xs")){a.hide()}if(a.hasClass("menu_opened_on_xs")){a.show()}}}function sections_content_vertical_position(){if(viewport().width>window.xs_screen_max){var a=$(window).height();var b=0.8*a;$("#main-content .section-wrapper").each(function(){var e=$(this).find(".content-wrapper");var c=e.height();var d=($(this).hasClass("active"))?true:false;if(c>b){e.css({position:"static"})}else{e.css({position:"absolute"})}})}else{$("#main-content .section-wrapper .content-wrapper").css({position:"static"})}}function initialise_general_links_click_events(){$("a.link-scroll").click(function(c){var a=$(this).attr("href");if(a!==undefined&&a!=""&&a!="#"){var d=a.substr(0,1);if(d=="#"){if($(a).length>0){$("#main-content").addClass("same_page_link_in_action");var b=$(a).offset().top;$("html, body").stop().animate({scrollTop:b},1500,"easeInOutCubic",function(){$("#main-content").removeClass("same_page_link_in_action");update_active_sections_on_scroll()});c.preventDefault?c.preventDefault():c.returnValue=false}else{return false}}else{}}else{c.preventDefault?c.preventDefault():c.returnValue=false;return false}})}function initialise_main_menu_click_events(){$("#main-menu .menu-item > a").off("click");$("#main-menu .menu-item > a").prop("onclick",null);$("#main-menu .menu-item > a").click(function(c){var b=$(this).attr("href");var f=b.substr(0,1);var e=$(this).parent(".menu-item");var d=e.attr("id");if(e.hasClass("scroll")&&f=="#"){var a=(d!==undefined&&d!="")?d:"";$("#main-content").addClass("same_page_link_in_action");var g=(viewport().width>window.xs_screen_max)?true:false;scroll_to_section(b,a,g);c.preventDefault?c.preventDefault():c.returnValue=false}else{if(b===undefined||b==""||b=="#"){c.preventDefault?c.preventDefault():c.returnValue=false;return false}}})}function scroll_to_section(b,a,d){if(b!==undefined&&b!=""){var c=$("#main-content "+b+".section-wrapper");if(c.length!=0&&!c.hasClass("active")){var e=c.offset().top;$("html, body").stop().animate({scrollTop:e},1500,"easeInOutCubic",function(){$("#main-content").removeClass("same_page_link_in_action")});set_section_to_active(b,a,"",d)}else{return false}}else{return false}}function set_section_to_active(h,k,j,b){if(h!==undefined&&h!=""){var a=$("#main-content "+h+".section-wrapper");$("#main-menu .menu-item").removeClass("active");$("#main-content .section-wrapper").removeClass("active");var d=(k!=undefined&&k!="")?$("#main-menu #"+k+".menu-item"):"";if(d!=""&&d.length!=0){d.addClass("active")}else{var c=h.substr(1);$("#main-menu #menu-item-"+c+".menu-item").addClass("active")}a.addClass("active");toggle_top_icon_in_main_menu();if(b!=false){var f=a.attr("data-custom-background-img");var e=(f!==undefined&&f!="")?f:$("#outer-background-container").attr("data-default-background-img");if(e!==undefined&&e!=""){var g=(j!=true)?1500:550;$("#outer-background-container").backstretch(e,{fade:g})}}}}function get_all_section_wrappers_in_page(){var a=$("#main-content").find(".section-wrapper");return a}function update_active_sections_on_scroll(f,a){var e=(f!==undefined&&f!="")?f:$("#main-content").find(".section-wrapper");var a=(a!==a&&a!="")?a:0.25*($(window).height());var b=$(document).scrollTop();var d=e.map(function(){var g=($(this).offset().top)-a;var h=$(this).height();var j=g+h;if(b>g&&b<=j){return this}});if(d!==undefined&&d!=""){var c="#"+d.attr("id");if(!d.hasClass("active")){set_section_to_active(c,"",true)}}}function toggle_top_icon_in_main_menu(){var a=$("#main-menu #menu-item-intro");if(a.hasClass("active")){a.css({opacity:0}).addClass("main-menu-top-icon-active")}else{a.css({opacity:0.7}).removeClass("main-menu-top-icon-active")}}function preload_section_backgrounds(){var a=get_all_section_wrappers_in_page();if(a.length>0){a.each(function(){var c=$(this).attr("data-custom-background-img");if(c!==undefined&&c!=""){var b=new Image();b.src=c}})}}function add_clear_items_to_fix_grid_items_different_heights_issue(){if($("#main-content .grid .grid-item").length>0){var a=$("#main-content .grid");if(a.hasClass("clearfix-for-2cols")){a.find(".grid-item:nth-of-type(2n+2)").after('<article class="clearfix"></article>');return false}else{if(a.hasClass("clearfix-for-3cols")){a.find(".grid-item:nth-of-type(3n+3)").after('<article class="clearfix"></article>');
return false}}}}function effect_fade_out_inactive_grid_items(){if($("#main-content .projects-grid.effect-fade-inactive").length>0){$("#main-content .projects-grid.effect-fade-inactive").each(function(){var a=$(this);a.find(".grid-item .item-content").hover(function(){var b=$(this);b.css({opacity:1});a.find(".grid-item .item-content").not(b).css({opacity:0.3})},function(){var b=$(this);b.css({opacity:0.3})});a.hover(function(){},function(){setTimeout(function(){a.find(".grid-item .item-content").css({opacity:1})},200)})})}}function set_height_of_parent_content_wrappers(){var a=$("#main-content .max-height");a.each(function(){var b=$(this).parents(".content-wrapper");if(b.length>0){b.parents(".section-wrapper").addClass("modified-height");var c=$(this).attr("data-height-percent");if(c!==undefined&&c!=""&&!isNaN(c)){b.css({height:c+"%"})}else{b.css({height:"80%"})}}})}function set_equal_height_to_all_carousel_slides_on_small_displays(){var a=$("#main-content .carousel");a.each(function(){var d=($(this).attr("data-height-percent")!==undefined&&$(this).attr("data-height-percent")!=""&&!isNaN($(this).attr("data-height-percent")))?$(this).attr("data-height-percent"):80;var c=(d/100)*viewport().height;var e=$(this).find(".item .carousel-text-content");$(this).find(".item:not(.active)").css({opacity:"0",position:"absolute",display:"block"});e.css({height:"auto"});var f=[];e.each(function(){f.push($(this).height())});var b=Math.max.apply(Math,f)+40;$(this).find(".item:not(.active)").attr("style","");if(viewport().width<=window.sm_screen_max||b>=c){$(this).parents(".section-wrapper").addClass("modified-height");e.height(b)}else{$(this).parents(".section-wrapper").removeClass("modified-height");$(this).removeClass("slides-height-modified").find(".item .carousel-text-content").css({height:"100%"})}})}function populate_and_open_modal(b,g,f,d){var j=$("#common-modal.modal");var k=j.find(".modal-body");var c=$("#"+g);var h="";if(d!==undefined&&d!=""){h=d}if(k.length>0&&c.length>0){$("#outer-container").fadeTo("fast",0.2);var a=$(document).scrollTop();var e=c.html();k.empty().html(e);j.modal();c.find("a[data-lightbox]").each(function(){var l=$(this).attr("data-lightbox");$(this).removeAttr("data-lightbox");$(this).attr("data-mod-lightbox",l)});if(h!=""){j.addClass(h)}j.on("shown.bs.modal",function(l){position_modal_at_centre();if(f!==undefined&&f!=""&&$("#common-modal.modal").find(f).length>0){var m=$("#common-modal.modal").find(f).offset().top;$("#common-modal.modal").stop().animate({scrollTop:m},800,"easeInOutCubic")}modal_backdrop_height(j)});j.on("hide.bs.modal",function(l){$("#outer-container").fadeTo("fast",1);$("#"+g).find("a[data-mod-lightbox]").each(function(){var m=$(this).attr("data-mod-lightbox");$(this).removeAttr("data-mod-lightbox");$(this).attr("data-lightbox",m)})});j.on("hidden.bs.modal",function(l){k.empty();if(h!=""){j.removeClass(h)}})}b.preventDefault?b.preventDefault():b.returnValue=false;return false}function modal_backdrop_height(a){a.find(".modal-backdrop").css({"min-height":a.find(".modal-dialog").outerHeight(true)+"px"})}function position_modal_at_centre(){var f=$(".modal");if(f.length>0&&f.is(":visible")){var a=f.find(".modal-dialog");var c=a.width();var d=a.height();var e=((d+70)<viewport().height)?true:false;if(viewport().width>window.sm_screen_max&&e==true){var b=(viewport().height-d)/2;a.css({"margin-bottom":"20px"})}else{a.removeAttr("style")}}}function go_to_top_visibility(){var a=$("#go-to-top");if(a.length>0){var b=$(document).scrollTop();if(b<viewport().height){a.removeClass("active")}else{a.addClass("active")}}}function scroll_to_top(){$("html, body").stop().animate({scrollTop:0},1500,"easeInOutCubic",function(){$("#go-to-top").removeClass("active")})}function load_images(b,d,f){var e=$("."+b);if(e.length>0){var a=new Array();e.each(function(){var j=$(this).attr("data-img-src");if(j!==undefined&&j!=""){var h=new Array();h.img_object=$(this);h.img_src=j;a.push(h)}});var c=a.length;for(i=0;i<c;i++){var g=new Image();g.src=a[i]["img_src"];a[i]["img_object"].attr("src",a[i]["img_src"]);if(d==true){a[i]["img_object"].removeClass(b)}if(f==true&&i==c-1&&(!jQuery.browser.mobile||viewport().width>window.xs_screen_max)){g.onload=function(){sections_content_vertical_position()}}}}}function validate_and_submit_forms(b){var a=(b!==undefined&&b.length>0)?b:$("form.validate-form");a.each(function(){var c=$(this);c.find(".validate-field").each(function(){$(this).change(function(){$(this).siblings(".alert").fadeOut("fast",function(){$(this).remove()});if($(this).val().trim()!=""){var e=validate_fields(c,$(this));if(e.length>0){if(e[0]["message"]!==undefined&&e[0]["message"]!=""&&e[0]["message"]!="success"){var d='<div class="alert">'+e[0]["message"]+"</div>";$(this).after(d);$(this).siblings(".alert").fadeIn("fast")}}}})});c.find("#form-captcha-refresh").click(function(){reset_captcha(c)});c.submit(function(e){e.preventDefault?e.preventDefault():e.returnValue=false;$(this).find(".form-loader").fadeIn("fast");
var d=$(this).attr("action");if(d===undefined&&d==""){return false}$(this).find(".alert").fadeOut("fast",function(){$(this).remove()});$(this).find(".form-general-error-container").fadeOut("fast",function(){$(this).empty()});var f=false;$(this).find(".validate-field").each(function(){var h=validate_fields(c,$(this));if(h.length>0){if(h[0]["message"]!==undefined&&h[0]["message"]!=""&&h[0]["message"]!="success"){var g='<div class="alert">'+h[0]["message"]+"</div>";$(this).after(g);$(this).siblings(".alert").fadeIn("fast");f=true}}});if(f==true){$(this).find(".form-loader").fadeOut("fast");return false}$.ajax({type:"POST",url:d,data:$(this).serialize(),dataType:"html",success:function(k){c.find(".form-loader").fadeOut("fast");var l=(k=="success")?true:false;var h=(k=="captcha")?false:true;var g="";switch(k){case"success":g="Form submitted successfully.";break;case"captcha":g="Incorrect text entered. (Case-sensitive)";break;case"incomplete":g="Please fill in all required fields.";break;case"error":g="An error occured. Please try again later.";break}var j='<div class="alert ';j+=(l==true)?"success":"error";j+='">'+g+"</div>";if(!h){c.find("#form-captcha").parent(".form-group").append(j);c.find("#form-captcha").siblings(".alert").fadeIn("fast")}else{c.find(".form-general-error-container").html(j).fadeIn("fast",function(){$(this).delay(10000).fadeOut("fast",function(){$(this).html("")})})}reset_captcha(c);if(l==true){c.find(".form-control").val("")}},error:function(h){c.find(".form-loader").fadeOut("fast");var g='<div class="alert">An error occured. Please try again later.</div>';c.find(".form-general-error-container").html(g).fadeIn("fast")}})})})}function reset_forms(b){if(b!==undefined&&b.length>0){var a=b;a.find("input").val("");a.find(".alert").remove();a.find(".form-general-error-container").empty().hide();reset_captcha(b)}}function reset_captcha(b){var a=(b!==undefined&&b.length>0)?b:$("form.validate-form");a.each(function(){var e=$(this);var c=e.find("#form-captcha-img");if(c.length>0&&e.is(":visible")){var f=new Date().getTime();c.replaceWith('<img id="form-captcha-img" src="assets/php/form_captcha/captcha_img.php?t='+f+'" style="display:none">');e.find("#form-captcha").val("");setTimeout(function(){e.find("#form-captcha-img").show()},500)}})}function validate_fields(d,a){if(d!==undefined&&d.length>0){var b=(a!==undefined&&a.length>0)?a:d.find(".validate");var c=new Array();b.each(function(){var e=$(this).attr("data-validation-type");var h=$(this).hasClass("required");var g=$(this).val().trim();var f=new Array();f.field_object=$(this);f.message="success";if(h==true&&(g==""||g===null||g===undefined)){f.message="This field is required"}if(e=="string"&&(g!=""&&g!==null&&g!==undefined)){if(g.match(/^[a-z0-9 .\-]+$/i)==null){f.message="Invalid characters found."}}else{if(e=="email"&&(g!=""&&g!==null&&g!==undefined)){if(g.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)==null){f.message="Please enter a valid email address."}}else{if(e=="phone"&&(g!=""&&g!==null&&g!==undefined)){if(g.match(/^\(?\+?[\d\(\-\s\)]+$/)==null){f.message="Invalid characters found."}}}}c.push(f)});return c}}function contact_form_IE9_placeholder_fix(){var a=$("form");a.each(function(){var b=$(this);$(this).find(".form-control").each(function(){var c=$(this).attr("placeholder");if(c!==undefined&&c!=""){$(this).val(c);$(this).focus(function(){if($(this).val()==c){$(this).val("")}});$(this).blur(function(){if($(this).val()==""){$(this).val(c)}})}})})};
/* 
 * ===============================================================
 * ON DOCUMENT READY
 * ===============================================================
 */
function initialise_document_ready_functions()
{
    // useful variables (used in other functions)
    var section_wrappers = get_all_section_wrappers_in_page(); // get all the section wrappers in the page
    var amount_of_pixels_as_buffer_between_sections = 0.25 * ($(window).height()); // used in update_active_sections_on_scroll();

    // set visible section to active
    update_active_sections_on_scroll(section_wrappers, amount_of_pixels_as_buffer_between_sections);

    // Sections Content Vertical Position
    sections_content_vertical_position();

    // Initialise General Links Click Events
    initialise_general_links_click_events();
    // Initialise Main Menu Links Click Events
    initialise_main_menu_click_events();

    // initialise hover effect - fade out inactive project grid items
    effect_fade_out_inactive_grid_items(); 

    // modify heights of .content-wrapper parents of elements with .max-height class set
    set_height_of_parent_content_wrappers();

    // initialise carousel
    $('#features-carousel').carousel({
      interval: 6000
    });

    $('#features-text').carousel({
      interval: 6000
    });

    // initialise form validation and submit functions 
    validate_and_submit_forms();

    // responsive videos
    $('.content-wrapper').fitVids();

    // ------ On Opening Popups ------
    $('#common-modal').on('shown.bs.modal', function()
    {
        // responsive videos inside popups
        $('#common-modal .modal-body').fitVids();

        // initialise popup image gallery
        // - you can use the same functions below if you want to add a new Owl Carousel with different parameters (in this case call the carousel's unique ID instead)
        // - documentation for Owl Carousel: http://www.owlgraphic.com/owlcarousel/#how-to
        if ($('#common-modal .popup-image-gallery').length > 0)
        {
          // custom parameters for carousel (see Owl Carousel documentation for more info)
          $("#common-modal .popup-image-gallery").owlCarousel({
            autoPlay : 3000,
            stopOnHover : true,
            navigation: false,
            paginationSpeed : 1000,
            goToFirstSpeed : 2000,
            singleItem : true,
            lazyLoad : true,
            autoHeight : true,
            transitionStyle: "fade",
            afterLazyLoad : function() {
              position_modal_at_centre(); // position popup at the centre of the page 
              modal_backdrop_height($('#common-modal')); // fix backdrop height after all elements inside the popup are loaded
            }
          }); 
        }

        // initialise popup alternate image gallery
        if ($('#common-modal .popup-alt-image-gallery').length > 0)
        {
          $("#common-modal .popup-alt-image-gallery").owlCarousel({
            autoPlay : false,
            items : 5,
            stopOnHover : true,
            navigation: true,
            paginationSpeed : 500,
            goToFirstSpeed : 2000,
            singleItem : false,
            lazyLoad : true,
            baseClass : 'hide-bullets',
            autoHeight : false,
            transitionStyle: "backSlide",
            afterLazyLoad : function() {
              position_modal_at_centre(); // position popup at the centre of the page 
              modal_backdrop_height($('#common-modal')); // fix backdrop height after all elements inside the popup are loaded
            }
          }); 
        }

        // initialise forms in popups
        if ($('#common-modal form.validate-form').length > 0)
        {
            validate_and_submit_forms($('#common-modal form.validate-form'));
            reset_forms($('#common-modal form.validate-form'));
        }
    });

    // ------ On Closing Popups ------
    $("#common-modal").on('hide.bs.modal', function()
    {
        // Destroy Owl Carousel image gallery when modal/popup is closed (it will be re-initialised again when popup is re-opened)
        if ($('#common-modal .popup-image-gallery').length > 0)
        {
          var carousel_initialised_data = $('#common-modal .popup-image-gallery, #common-modal .popup-alt-image-gallery').data('owlCarousel');
          carousel_initialised_data.destroy();
        }

        // reset captcha outside popup
        if ($('#common-modal form.validate-form').length > 0)
        {
            setTimeout(function(){
                $('#common-modal form.validate-form').remove();
                reset_captcha();
            }, 500);
        }        
    });
    // ------ END: Owl Carousel ------    

    // initialise WOW.js intro animations
    new WOW().init();

    /* 
     * ----------------------------------------------------------
     * ON WINDOW RESIZE
     * ----------------------------------------------------------
     */
    $(window).resize(function()
    { 

        // update variables already set in document.ready above
        amount_of_pixels_as_buffer_between_sections = 0.25 * ($(window).height()); // used in update_active_sections_on_scroll();

        // Sections Content Vertical Position
        if (!jQuery.browser.mobile) sections_content_vertical_position();

        // Main Menu Visiblity on Window Resize
        main_menu_visiblity_on_resize();

        // Set equal height to all carousel slides on small displays
        set_equal_height_to_all_carousel_slides_on_small_displays();

        // Position modal at the centre/middle of the page (if visible)
        position_modal_at_centre();

    });
    // end: on window resize

    /* 
     * ----------------------------------------------------------
     * ON WINDOW SCROLL
     * ----------------------------------------------------------
     */
    $(window).scroll(function()
    { 

        // Update Active Sections on Scroll (do not use function when menu link was clicked - as this already has a link to the scroll function) -- (do not fire function on mobile viewports)
        if (!$("#main-content").hasClass("same_page_link_in_action") && !jQuery.browser.mobile )
        {
            update_active_sections_on_scroll(section_wrappers, amount_of_pixels_as_buffer_between_sections);
        }

        // update scroll to top icon visibility
        go_to_top_visibility();

    });
    // end: on window scroll

}
// end: initialise_document_ready_functions()

$(document).ready(function()
{
    initialise_document_ready_functions();
});

 /* 
 * ===============================================================
 * ON WINDOW LOAD (after all elements were loaded)
 * ===============================================================
 */

function initialise_window_load_functions()
{
    // update variables already set in document.ready above
    amount_of_pixels_as_buffer_between_sections = 0.25 * ($(window).height()); // used in update_active_sections_on_scroll();

    // Set equal height to all carousel slides on small displays
    set_equal_height_to_all_carousel_slides_on_small_displays();

    // Sections Content Vertical Position (when not viewing on a mobile)
    if (!jQuery.browser.mobile || viewport().width > window.xs_screen_max) sections_content_vertical_position();

    // preload all section background images after all elements were loaded (when not viewing on a mobile)
    if (!jQuery.browser.mobile || viewport().width > window.xs_screen_max) preload_section_backgrounds();

    // Grid Items Clearfix
    if (!jQuery.browser.mobile || viewport().width > window.xs_screen_max) add_clear_items_to_fix_grid_items_different_heights_issue();

    // Load images after other elements are loaded
    load_images("lazy", true, true);

}
// end: initialise_window_load_functions()

$(window).load(function()
{
    initialise_window_load_functions();
});
/*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */
(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*global jQuery */
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

/* v1.1.1 - http://sachinchoolur.github.io/lightslider */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('!4(e){"3w 3G";6 i={17:3,G:!1,I:1,y:10,A:"",j:"z",31:!0,1B:"3K",2d:"3r",H:2a,1z:!1,N:!1,1y:!0,1O:3C,1M:!1,1J:!0,2x:"",2D:"",1H:!1,2e:!1,D:!1,2b:3V,29:1w,26:10,1t:!0,Q:!1,2h:5,1p:5,2G:"2X",1W:!0,1S:!0,1Q:!0,1r:40,1d:[],2I:4(){},2O:4(){},2R:4(){},2T:4(){},28:4(){},23:4(){}};e.3g.21=4(t){k(0===8.9)U 8;k(8.9>1)U 8.3J(4(){e(8).21(t)}),8;6 n={},l=e.3d(!0,{},i,t),a={},s=8;n.$3k=8,"1c"===l.j&&(l.D=!1);6 o=s.1n(),r=e(1o).16(),d=1h,c=1h,f=0,h=0,u=!1,g=0,v="",p=0,m=l.D===!0?"19":"16",S=l.D===!0?"1u-2Y":"1u-1i",M=0,T=0,b=0,C=0,x=1h,w="3B"1G 2g.2W,P=3P 3Q;U P.20=4(){k(r=e(1o).16(),l.1d.9){k(l.G===!1)6 i=l.17;k(r<l.1d[0].1I)O(6 t=0;t<l.1d.9;t++)r<l.1d[t].1I&&(d=l.1d[t].1I,c=l.1d[t]);k("2v"!=38 c&&1h!=c)O(t 1G c.2A)("2v"==38 a[t]||1h==a[t])&&(a[t]=l[t]),l[t]=c.2A[t];k(!e.3q(a)&&r>l.1d[0].1I)O(t 1G a)l[t]=a[t];l.G===!1&&M>0&&b>0&&i!==l.17&&(p=1K.3t(M/((b+l.y)*l.I)))}},P.1C=4(){l.G===!1&&(b=(g-(l.17*l.y-l.y))/l.17)},P.1v=4(e){6 i=e===!0?v.7(".J").9:o.9;k(l.G===!1)h=i*(b+l.y);Y{h=0;O(6 t=0;i>t;t++)h+=1g(o.F(t).16())+l.y}U h%1!==0&&(h+=1),h},n={11:4(){6 e=4(){O(6 e=["14","3X","3Y","3b","4a","3f"],i=2g.2W,t=0;t<e.9;t++)k(e[t]1G i.2t)U!0};U l.31&&e()?!0:!1},1M:4(){l.1M&&e(2g).V("3i.3j",4(e){e.1k(),37===e.2z?(s.1R(),1j(x)):39===e.2z&&(s.1q(),1j(x))})},1J:4(){l.1J&&(s.2H(\'<1s 1a="13"><a 1a="2o">\'+l.2x+\'</a><a 1a="2U">\'+l.2D+"</a></1s>"),l.G?P.1v(!1)<g&&v.7(".13").1D():f<=l.17&&v.7(".13").1D(),v.7(".13 a").V("1E",4(i){i.1k(),"2o"===e(8).1F("1a")?s.1R():s.1q(),1j(x)}))},30:4(){6 e=8;"1c"===l.j&&(l.G=!1,l.1y=!1),l.1z&&(l.1y=!1),l.G&&(l.I=1,l.17=1),l.N&&(l.I=1,l.1Q=!1),l.2I.1f(8,s),P.20(),s.A("21").3Z("<1s 1a=\'3a "+l.A+"\'><1s 1a=\'2q\'></1s></1s>"),v=s.R(".2q"),l.1H===!0&&v.R().A("3e"),l.D?(v.R().A("D"),g=l.2b,v.q("19",g+"E")):g=s.2w(),o.A("J"),l.N===!0&&"z"===l.j&&(P.1C(),P.B=4(){k(P.1v(!0)>g){O(6 i=0,t=0,n=0;n<o.9&&(i+=1g(s.7(".J").F(n).16())+l.y,t++,!(i>=g+l.y));n++);6 a=l.G===!0?t:l.17;k(a<s.7(".B.L").9)O(6 r=0;r<s.7(".B.L").9-a;r++)o.F(r).2f();k(a<s.7(".B.1i").9)O(6 d=o.9-1;d>o.9-1-s.7(".B.1i").9;d--)p--,o.F(d).2f();O(6 n=s.7(".B.1i").9;a>n;n++)s.7(".J").F(n).B().1b("J").A("B 1i").3m(s),p++;O(6 c=s.7(".J").9-s.7(".B.L").9;c>s.7(".J").9-a;c--)s.7(".J").F(c-1).B().1b("J").A("B L").3n(s);o=s.1n()}Y o.3o("B")&&(s.7(".B").2f(),e.1l(s,0))},P.B()),P.2k=4(){f=o.9,l.1H===!0&&l.D===!1&&(S="1u-L"),l.G===!1&&o.q(m,b+"E"),o.q(S,l.y+"E"),h=P.1v(!1),s.q(m,h+"E"),l.N===!0&&"z"===l.j&&u===!1&&(p=s.7(".B.L").9)},P.2n=4(){o=s.1n(),f=o.9},8.11()&&v.A("3s"),P.2n(),"z"===l.j?(P.1C(),P.2k(),l.N===!0&&(M=e.1x(),8.1l(s,M)),l.D===!1&&8.1L(s,!1,!0)):(8.1L(s,!0,!0),s.A("3u"),8.11()||o.3v(".K").q("3z","3A")),l.N===!0&&"z"===l.j?o.F(p).A("K"):o.1N().A("K")},1t:4(){6 e=8;k(P.22=4(){C=(g-(l.26*l.1p-l.1p))/l.26;6 i=v.7(".J"),t=v.7(".J").9,n=0,a="",o=0;O(n=0;t>n;n++){"z"===l.j&&(l.G?o+=(1g(i.F(n).16())+l.y)*l.I:o=n*(b+l.y)*l.I);6 r=i.F(n*l.I).1F("3E-3F");k(a+=l.Q===!0?\'<15 2t="16:1w%;\'+m+":"+C+"E;"+S+":"+l.1p+\'E"><a 24="25:1P(0)"><33 3T="\'+r+\'" /></a></15>\':\'<15><a 24="25:1P(0)">\'+(n+1)+"</a></15>","z"===l.j&&o>=h-g-l.y){n+=1;6 d=2;l.G&&(a+=\'<15><a 24="25:1P(0)">\'+(n+1)+"</a></15>",d=1),d>n?(a=1h,v.R().A("2r")):v.R().1b("2r");27}}6 c=v.R();k(c.7(".X").41(a),!l.D&&l.Q){6 f=v.R().7(".2u");12(4(){e.1L(f,!1,!1)})}l.Q===!0&&(l.D===!0&&c.7(".X").q("16",l.29+"E"),T=n*(l.1p+C)+.5,c.7(".X").q({3c:T+"E","14-1m":l.H+"1A"}),l.D===!0&&v.R().q("2y-1i",l.29+l.2h+"E"),c.7(".X").q(m,T+"E"));6 u=c.7(".X").7("15");u.1N().A("K"),u.V("1E",4(){l.N===!0&&"z"===l.j?p+=u.2c(8)-c.7(".X").7("15.K").2c():p=u.2c(8),s.j(!1),l.Q===!0&&e.18(),1j(x)})},l.1t){6 i="3h";l.Q&&(i="2u"),v.2H(\'<2B 1a="X \'+i+\'"></2B>\');6 t=l.D?"1u-L":"1u-2C";v.R().7(".X").q(t,l.2h+"E"),P.22()}12(4(){P.1T()},0)},1L:4(e,i,t){6 n=1h;n=t?e.1n(".J ").1N():e.1n().1N();6 l=4(){6 t=n.19(),l=0,a=t;i&&(t=0,l=1w*a/g),e.q({19:t+"E","2y-2Y":l+"%"})};l(),n.7("33").3l(4(){12(4(){l()},1w)})},K:4(e,i){8.11()&&"1c"===l.j&&v.A("V");6 t=0;k(p*l.I<f){k(e.1b("K"),8.11()||"1c"!==l.j||i!==!1||e.2E(l.H),t=i===!0?p:p*l.I,i===!0){6 n=e.9,a=n-1;t+1>=n&&(t=a)}k(l.N===!0&&"z"===l.j&&(t=i===!0?p-s.7(".B.L").9:p*l.I,i===!0)){6 n=e.9,a=n-1;t+1==n?t=a:t+1>n&&(t=0)}8.11()||"1c"!==l.j||i!==!1||e.F(t).2F(l.H),e.F(t).A("K")}Y e.1b("K"),e.F(e.9-1).A("K"),8.11()||"1c"!==l.j||i!==!1||(e.2E(l.H),e.F(t).2F(l.H))},1l:4(e,i){l.1H===!0&&(i=-i),8.11()?e.q(l.D===!0?{1U:"1V(1e, "+-i+"E, 1e)","-2J-1U":"1V(1e, "+-i+"E, 1e)"}:{1U:"1V("+-i+"E, 1e, 1e)","-2J-1U":"1V("+-i+"E, 1e, 1e)"}):l.D===!0?e.q("2K","2L").2M({2C:-i+"E"},l.H,l.2d):e.q("2K","2L").2M({L:-i+"E"},l.H,l.2d);6 t=v.R().7(".X").7("15");8.K(t,!0)},1c:4(){8.K(o,!1);6 e=v.R().7(".X").7("15");8.K(e,!0)},z:4(){6 e=8;P.2N=4(){h>g&&(M=e.1x(),e.K(o,!1),M>h-g-l.y?M=h-g-l.y:0>M&&(M=0),e.1l(s,M),l.N===!0&&"z"===l.j&&(p>=f-s.7(".B.L").9/l.I&&e.2i(s.7(".B.L").9),0===p&&e.2i(v.7(".J").9)))},P.2N()},2i:4(e){6 i=8;v.7(".13 a").A("2P"),12(4(){p=e,v.q("14-1m","2Q"),M=i.1x(),i.K(o,!1),n.1l(s,M),12(4(){v.q("14-1m",l.H+"1A"),v.7(".13 a").1b("2P")},3x)},l.H+1w)},1x:4(){6 e=0;k(l.G===!1)e=p*(b+l.y)*l.I;Y{e=0;O(6 i=0;p>i;i++)e+=1g(o.F(i).16())+l.y}U e},18:4(){6 e;3y(l.2G){2j"L":e=0;27;2j"2X":e=g/2-C/2;27;2j"1i":e=g-C}6 i=p-s.7(".B.L").9,t=v.R().7(".X");"z"===l.j&&l.N===!0&&(i>=t.1n().9?i=0:0>i&&(i=t.1n().9));6 n=i*(C+l.1p)-e;n+g>T&&(n=T-g-l.1p),0>n&&(n=0),8.1l(t,n)},1z:4(){l.1z&&(x=2S(4(){s.1q()},l.1O))},1X:4(e,i){k(v.q("14-1m","2Q"),"z"===l.j){6 t=e-i,n=M-t;k(n>=h-g-l.y)k(l.1Q===!1)n=h-g-l.y;Y{6 a=h-g-l.y;n=a+(n-a)/5}Y 0>n&&(l.1Q===!1?n=0:n/=5);8.1l(s,n)}},2l:4(e){k(v.q("14-1m",l.H+"1A"),1j(x),"z"===l.j){6 i=!1,t=!0;M-=e,M>h-g-l.y?(M=h-g-l.y,l.G===!1&&(i=!0)):0>M&&(M=0);6 n=4(e){6 t=0;k(i||e&&(t=1),l.G)O(6 n=0,a=0;a<o.9&&(n+=1g(o.F(a).16())+l.y,p=a+t,!(n>=M));a++);Y{6 s=M/((b+l.y)*l.I);p=1g(s)+t,M>=h-g-l.y&&s%1!==0&&p++}};e>=l.1r?(n(!1),t=!1):e<=-l.1r&&(n(!0),t=!1),s.j(t),8.18()}Y e>=l.1r?s.1R():e<=-l.1r&&s.1q()},1S:4(){6 i=8;k(!w){6 t=0,n=0,a=!1;v.V("3D",4(i){U g>h&&0!==h?!1:1P("2o"!==e(i.2V).1F("1a")&&"2U"!==e(i.2V).1F("1a")&&(t=l.D===!0?i.Z:i.W,a=!0,i.1k()))}),e(1o).V("3H",4(e){a&&(n=l.D===!0?e.Z:e.W,i.1X(n,t))}),e(1o).V("3I",4(s){k(a){a=!1,n=l.D===!0?s.Z:s.W;6 o=n-t;1K.2m(o)>=l.1r&&e(1o).V("1E.2Z",4(i){i.1k(),i.3L(),i.3M(),e(1o).3N("1E.2Z")}),i.2l(o)}})}},1W:4(){6 e=8;k(w){6 i={},t={};v.V("3O",4(e){t=e.1Y.1Z[0],i.W=e.1Y.1Z[0].W,i.Z=e.1Y.1Z[0].Z}),v.V("3R",4(n){k(g>h&&0!==h)U!1;6 a=n.1Y;t=a.1Z[0];6 s=1K.2m(t.W-i.W),o=1K.2m(t.Z-i.Z);l.D===!0?(3*o>s&&n.1k(),e.1X(t.Z,i.Z)):(3*s>o&&n.1k(),e.1X(t.W,i.W))}),v.V("3S",4(){k(g>h&&0!==h)U!1;k(l.D===!0)6 n=t.Z-i.Z;Y 6 n=t.W-i.W;e.2l(n)})}},32:4(){6 e=8;e.30(),e.1z(),8.11()&&(l.1W===!0&&e.1W(),l.1S===!0&&e.1S()),e.1t(),e.1J(),e.1M()}},n.32(),P.1T=4(){P.20(),l.D===!0?(g=l.17>1?l.2b:o.3U(),v.q("19",g+"E")):g=v.2w(),l.N===!0&&"z"===l.j&&P.B(),P.2n(),"z"===l.j&&s.1b("2p"),"z"===l.j&&(P.1C(),P.2k()),12(4(){"z"===l.j&&s.A("2p")},3W),l.1t&&P.22(),l.2e===!0&&l.D===!1&&s.q("19",o.F(p).19()),l.Q===!0&&n.18(),"z"===l.j&&n.z(),l.G===!1?o.9<=l.17?v.7(".13").1D():v.7(".13").34():P.1v(!1)<g&&0!==h?v.7(".13").1D():v.7(".13").34()},s.1R=4(){k(p>0)l.23.1f(8,s,p),p--,s.j(!1),l.Q===!0&&n.18();Y k(l.N===!0){k(l.23.1f(8,s,p),"1c"===l.j){6 e=f-1;p=1g(e/l.I)}s.j(!1),l.Q===!0&&n.18()}Y l.1y===!0&&(s.A("35"),12(4(){s.1b("35")},2a))},s.1q=4(){6 e=!0;k("z"===l.j)6 i=n.1x(),e=i<h-g-l.y;p*l.I<f-l.I&&e?(l.28.1f(8,s,p),p++,s.j(!1),l.Q===!0&&n.18()):l.N===!0?(l.28.1f(8,s,p),p=0,s.j(!1),l.Q===!0&&n.18()):l.1y===!0&&(s.A("36"),12(4(){s.1b("36")},2a))},s.j=4(e){l.2e===!0&&l.D===!1&&s.q("19",o.F(p).19()),u===!1&&("z"===l.j?n.11()&&(s.A("2p"),""!==l.H&&v.q("14-1m",l.H+"1A"),""!==l.1B&&v.q("14-2s-4",l.1B)):n.11()&&(""!==l.H&&s.q("14-1m",l.H+"1A"),""!==l.1B&&s.q("14-2s-4",l.1B))),e||l.2R.1f(8,s,p),"z"===l.j?n.z():n.1c(),12(4(){e||l.2T.1f(8,s,p)},l.H),u=!0},s.42=4(){1j(x),s.1q(),x=2S(4(){s.1q()},l.1O)},s.1O=4(){1j(x)},s.43=4(){P.1T()},s.44=4(){6 e=p;k(l.N){6 i=v.7(".J").9,t=s.7(".B.L").9;e=t-1>=p?i+(p-t):p>=i+t?p-i-t:p-t}U e+1},s.45=4(){U v.7(".J").9},s.46=4(e){p=l.N?e+s.7(".B.L").9-1:e,s.j(!1),l.Q===!0&&n.18()},12(4(){l.2O.1f(8,s)},10),e(1o).V("47 48",4(e){12(4(){e.1k(),P.1T()},49)}),8}}(3p);',62,259,'||||function||var|find|this|length||||||||||mode|if||||||css||||||||slideMargin|slide|addClass|clone||vertical|px|eq|autoWidth|speed|slideMove|lslide|active|left||loop|for||gallery|parent|||return|on|pageX|lSPager|else|pageY||doCss|setTimeout|lSAction|transition|li|width|item|slideThumb|height|class|removeClass|fade|responsive|0px|call|parseInt|null|right|clearInterval|preventDefault|move|duration|children|window|thumbMargin|goToNextSlide|swipeThreshold|div|pager|margin|calWidth|100|slideValue|slideEndAnimatoin|auto|ms|cssEasing|calSW|hide|click|attr|in|rtl|breakpoint|controls|Math|setHeight|keyPress|first|pause|void|freeMove|goToPrevSlide|enableDrag|init|transform|translate3d|enableTouch|touchMove|originalEvent|targetTouches|chbreakpoint|lightSlider|createPager|onBeforePrevSlide|href|javascript|thumbItem|break|onBeforeNextSlide|vThumbWidth|400|verticalHeight|index|easing|adaptiveHeight|remove|document|galleryMargin|resetSlide|case|sSW|touchEnd|abs|calL|lSPrev|lSSlide|lSSlideWrapper|noPager|timing|style|lSGallery|undefined|outerWidth|prevHtml|padding|keyCode|settings|ul|top|nextHtml|fadeOut|fadeIn|currentPagerPosition|after|onBeforeStart|webkit|position|relative|animate|calSlide|onSliderLoad|disabled|0ms|onBeforeSlide|setInterval|onAfterSlide|lSNext|target|documentElement|middle|bottom|ls|initialStyle|useCSS|build|img|show|leftEnd|rightEnd||typeof||lSSlideOuter|OTransition|property|extend|lSrtl|KhtmlTransition|fn|lSpg|keyup|lightslider|el|load|appendTo|prependTo|hasClass|jQuery|isEmptyObject|linear|usingCss|round|lSFade|not|use|50|switch|display|none|ontouchstart|2e3|mousedown|data|thumb|strict|mousemove|mouseup|each|ease|stopImmediatePropagation|stopPropagation|off|touchstart|new|Object|touchmove|touchend|src|outerHeight|500|1e3|MozTransition|WebkitTransition|wrap||html|play|refresh|getCurrentSlideCount|getTotalSlideCount|goToSlide|resize|orientationchange|200|msTransition'.split('|'),0,{}))
// jquery.royalslider v9.5.4
(function(n){function u(b,f){var c,a=this,e=window.navigator,g=e.userAgent.toLowerCase();a.uid=n.rsModules.uid++;a.ns=".rs"+a.uid;var d=document.createElement("div").style,h=["webkit","Moz","ms","O"],k="",l=0,r;for(c=0;c<h.length;c++)r=h[c],!k&&r+"Transform"in d&&(k=r),r=r.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[r+"RequestAnimationFrame"],window.cancelAnimationFrame=window[r+"CancelAnimationFrame"]||window[r+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||
(window.requestAnimationFrame=function(a,b){var c=(new Date).getTime(),d=Math.max(0,16-(c-l)),e=window.setTimeout(function(){a(c+d)},d);l=c+d;return e});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});a.isIPAD=g.match(/(ipad)/);a.isIOS=a.isIPAD||g.match(/(iphone|ipod)/);c=function(a){a=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||
[];return{browser:a[1]||"",version:a[2]||"0"}}(g);h={};c.browser&&(h[c.browser]=!0,h.version=c.version);h.chrome&&(h.webkit=!0);a._a=h;a.isAndroid=-1<g.indexOf("android");a.slider=n(b);a.ev=n(a);a._b=n(document);a.st=n.extend({},n.fn.royalSlider.defaults,f);a._c=a.st.transitionSpeed;a._d=0;!a.st.allowCSS3||h.webkit&&!a.st.allowCSS3OnWebkit||(c=k+(k?"T":"t"),a._e=c+"ransform"in d&&c+"ransition"in d,a._e&&(a._f=k+(k?"P":"p")+"erspective"in d));k=k.toLowerCase();a._g="-"+k+"-";a._h="vertical"===a.st.slidesOrientation?
!1:!0;a._i=a._h?"left":"top";a._j=a._h?"width":"height";a._k=-1;a._l="fade"===a.st.transitionType?!1:!0;a._l||(a.st.sliderDrag=!1,a._m=10);a._n="z-index:0; display:none; opacity:0;";a._o=0;a._p=0;a._q=0;n.each(n.rsModules,function(b,c){"uid"!==b&&c.call(a)});a.slides=[];a._r=0;(a.st.slides?n(a.st.slides):a.slider.children().detach()).each(function(){a._s(this,!0)});a.st.randomizeSlides&&a.slides.sort(function(){return 0.5-Math.random()});a.numSlides=a.slides.length;a._t();a.st.startSlideId?a.st.startSlideId>
a.numSlides-1&&(a.st.startSlideId=a.numSlides-1):a.st.startSlideId=0;a._o=a.staticSlideId=a.currSlideId=a._u=a.st.startSlideId;a.currSlide=a.slides[a.currSlideId];a._v=0;a.pointerMultitouch=!1;a.slider.addClass((a._h?"rsHor":"rsVer")+(a._l?"":" rsFade"));d='<div class="rsOverflow"><div class="rsContainer">';a.slidesSpacing=a.st.slidesSpacing;a._w=(a._h?a.slider.width():a.slider.height())+a.st.slidesSpacing;a._x=Boolean(0<a._y);1>=a.numSlides&&(a._z=!1);a._a1=a._z&&a._l?2===a.numSlides?1:2:0;a._b1=
6>a.numSlides?a.numSlides:6;a._c1=0;a._d1=0;a.slidesJQ=[];for(c=0;c<a.numSlides;c++)a.slidesJQ.push(n('<div style="'+(a._l?"":c!==a.currSlideId?a._n:"z-index:0;")+'" class="rsSlide "></div>'));a._e1=d=n(d+"</div></div>");var m=a.ns,k=function(b,c,d,e,f){a._j1=b+c+m;a._k1=b+d+m;a._l1=b+e+m;f&&(a._m1=b+f+m)};c=e.pointerEnabled;a.pointerEnabled=c||e.msPointerEnabled;a.pointerEnabled?(a.hasTouch=!1,a._n1=0.2,a.pointerMultitouch=Boolean(1<e[(c?"m":"msM")+"axTouchPoints"]),c?k("pointer","down","move","up",
"cancel"):k("MSPointer","Down","Move","Up","Cancel")):(a.isIOS?a._j1=a._k1=a._l1=a._m1="":k("mouse","down","move","up"),"ontouchstart"in window||"createTouch"in document?(a.hasTouch=!0,a._j1+=" touchstart"+m,a._k1+=" touchmove"+m,a._l1+=" touchend"+m,a._m1+=" touchcancel"+m,a._n1=0.5,a.st.sliderTouch&&(a._f1=!0)):(a.hasTouch=!1,a._n1=0.2));a.st.sliderDrag&&(a._f1=!0,h.msie||h.opera?a._g1=a._h1="move":h.mozilla?(a._g1="-moz-grab",a._h1="-moz-grabbing"):h.webkit&&-1!=e.platform.indexOf("Mac")&&(a._g1=
"-webkit-grab",a._h1="-webkit-grabbing"),a._i1());a.slider.html(d);a._o1=a.st.controlsInside?a._e1:a.slider;a._p1=a._e1.children(".rsContainer");a.pointerEnabled&&a._p1.css((c?"":"-ms-")+"touch-action",a._h?"pan-y":"pan-x");a._q1=n('<div class="rsPreloader"></div>');e=a._p1.children(".rsSlide");a._r1=a.slidesJQ[a.currSlideId];a._s1=0;a._e?(a._t1="transition-property",a._u1="transition-duration",a._v1="transition-timing-function",a._w1=a._x1=a._g+"transform",a._f?(h.webkit&&!h.chrome&&a.slider.addClass("rsWebkit3d"),
a._y1="translate3d(",a._z1="px, ",a._a2="px, 0px)"):(a._y1="translate(",a._z1="px, ",a._a2="px)"),a._l?a._p1[a._g+a._t1]=a._g+"transform":(h={},h[a._g+a._t1]="opacity",h[a._g+a._u1]=a.st.transitionSpeed+"ms",h[a._g+a._v1]=a.st.css3easeInOut,e.css(h))):(a._x1="left",a._w1="top");var p;n(window).on("resize"+a.ns,function(){p&&clearTimeout(p);p=setTimeout(function(){a.updateSliderSize()},50)});a.ev.trigger("rsAfterPropsSetup");a.updateSliderSize();a.st.keyboardNavEnabled&&a._b2();a.st.arrowsNavHideOnTouch&&
(a.hasTouch||a.pointerMultitouch)&&(a.st.arrowsNav=!1);a.st.arrowsNav&&(e=a._o1,n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e),a._c2=e.children(".rsArrowLeft").click(function(b){b.preventDefault();a.prev()}),a._d2=e.children(".rsArrowRight").click(function(b){b.preventDefault();a.next()}),a.st.arrowsNavAutoHide&&!a.hasTouch&&(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"),e.one("mousemove.arrowshover",
function(){a._c2.removeClass("rsHidden");a._d2.removeClass("rsHidden")}),e.hover(function(){a._e2||(a._c2.removeClass("rsHidden"),a._d2.removeClass("rsHidden"))},function(){a._e2||(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"))})),a.ev.on("rsOnUpdateNav",function(){a._f2()}),a._f2());if(a._f1)a._p1.on(a._j1,function(b){a._g2(b)});else a.dragSuccess=!1;var q=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];a._p1.click(function(b){if(!a.dragSuccess){var c=n(b.target).attr("class");
if(-1!==n.inArray(c,q)&&a.toggleVideo())return!1;if(a.st.navigateByClick&&!a._h2){if(n(b.target).closest(".rsNoDrag",a._r1).length)return!0;a._i2(b)}a.ev.trigger("rsSlideClick",b)}}).on("click.rs","a",function(b){if(a.dragSuccess)return!1;a._h2=!0;setTimeout(function(){a._h2=!1},3)});a.ev.trigger("rsAfterInit")}n.rsModules||(n.rsModules={uid:0});u.prototype={constructor:u,_i2:function(b){b=b[this._h?"pageX":"pageY"]-this._j2;b>=this._q?this.next():0>b&&this.prev()},_t:function(){var b;b=this.st.numImagesToPreload;
if(this._z=this.st.loop)2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1);this._z&&0<b&&(4>=this.numSlides?b=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(b=Math.floor((this.numSlides-1)/2)));this._y=b},_s:function(b,f){function c(b,c){c?g.images.push(b.attr(c)):g.images.push(b.text());if(h){h=!1;g.caption="src"===c?b.attr("alt"):b.contents();g.image=g.images[0];g.videoURL=b.attr("data-rsVideo");var d=b.attr("data-rsw"),e=b.attr("data-rsh");
"undefined"!==typeof d&&!1!==d&&"undefined"!==typeof e&&!1!==e?(g.iW=parseInt(d,10),g.iH=parseInt(e,10)):a.st.imgWidth&&a.st.imgHeight&&(g.iW=a.st.imgWidth,g.iH=a.st.imgHeight)}}var a=this,e,g={},d,h=!0;b=n(b);a._k2=b;a.ev.trigger("rsBeforeParseNode",[b,g]);if(!g.stopParsing)return b=a._k2,g.id=a._r,g.contentAdded=!1,a._r++,g.images=[],g.isBig=!1,g.hasCover||(b.hasClass("rsImg")?(d=b,e=!0):(d=b.find(".rsImg"),d.length&&(e=!0)),e?(g.bigImage=d.eq(0).attr("data-rsBigImg"),d.each(function(){var a=n(this);
a.is("a")?c(a,"href"):a.is("img")?c(a,"src"):c(a)})):b.is("img")&&(b.addClass("rsImg rsMainSlideImage"),c(b,"src"))),d=b.find(".rsCaption"),d.length&&(g.caption=d.remove()),g.content=b,a.ev.trigger("rsAfterParseNode",[b,g]),f&&a.slides.push(g),0===g.images.length&&(g.isLoaded=!0,g.isRendered=!1,g.isLoading=!1,g.images=null),g},_b2:function(){var b=this,f,c,a=function(a){37===a?b.prev():39===a&&b.next()};b._b.on("keydown"+b.ns,function(e){b._l2||(c=e.keyCode,37!==c&&39!==c||f||(a(c),f=setInterval(function(){a(c)},
700)))}).on("keyup"+b.ns,function(a){f&&(clearInterval(f),f=null)})},goTo:function(b,f){b!==this.currSlideId&&this._m2(b,this.st.transitionSpeed,!0,!f)},destroy:function(b){this.ev.trigger("rsBeforeDestroy");this._b.off("keydown"+this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);this._p1.off(this._j1+" click");this.slider.data("royalSlider",null);n.removeData(this.slider,"royalSlider");n(window).off("resize"+this.ns);this.loadingTimeout&&clearTimeout(this.loadingTimeout);b&&this.slider.remove();
this.ev=this.slider=this.slides=null},_n2:function(b,f){function c(c,f,g){c.isAdded?(a(f,c),e(f,c)):(g||(g=d.slidesJQ[f]),c.holder?g=c.holder:(g=d.slidesJQ[f]=n(g),c.holder=g),c.appendOnLoaded=!1,e(f,c,g),a(f,c),d._p2(c,g,b),c.isAdded=!0)}function a(a,c){c.contentAdded||(d.setItemHtml(c,b),b||(c.contentAdded=!0))}function e(a,b,c){d._l&&(c||(c=d.slidesJQ[a]),c.css(d._i,(a+d._d1+p)*d._w))}function g(a){if(l){if(a>r-1)return g(a-r);if(0>a)return g(r+a)}return a}var d=this,h,k,l=d._z,r=d.numSlides;if(!isNaN(f))return g(f);
var m=d.currSlideId,p,q=b?Math.abs(d._o2-d.currSlideId)>=d.numSlides-1?0:1:d._y,s=Math.min(2,q),v=!1,u=!1,t;for(k=m;k<m+1+s;k++)if(t=g(k),(h=d.slides[t])&&(!h.isAdded||!h.positionSet)){v=!0;break}for(k=m-1;k>m-1-s;k--)if(t=g(k),(h=d.slides[t])&&(!h.isAdded||!h.positionSet)){u=!0;break}if(v)for(k=m;k<m+q+1;k++)t=g(k),p=Math.floor((d._u-(m-k))/d.numSlides)*d.numSlides,(h=d.slides[t])&&c(h,t);if(u)for(k=m-1;k>m-1-q;k--)t=g(k),p=Math.floor((d._u-(m-k))/r)*r,(h=d.slides[t])&&c(h,t);if(!b)for(s=g(m-q),
m=g(m+q),q=s>m?0:s,k=0;k<r;k++)s>m&&k>s-1||!(k<q||k>m)||(h=d.slides[k])&&h.holder&&(h.holder.detach(),h.isAdded=!1)},setItemHtml:function(b,f){var c=this,a=function(){if(!b.images)b.isRendered=!0,b.isLoaded=!0,b.isLoading=!1,d(!0);else if(!b.isLoading){var a,f;b.content.hasClass("rsImg")?(a=b.content,f=!0):a=b.content.find(".rsImg:not(img)");a&&!a.is("img")&&a.each(function(){var a=n(this),c='<img class="rsImg" src="'+(a.is("a")?a.attr("href"):a.text())+'" />';f?b.content=n(c):a.replaceWith(c)});
a=f?b.content:b.content.find("img.rsImg");k();a.eq(0).addClass("rsMainSlideImage");b.iW&&b.iH&&(b.isLoaded||c._q2(b),d());b.isLoading=!0;if(b.isBig)n("<img />").on("load.rs error.rs",function(a){n(this).off("load.rs error.rs");e([this],!0)}).attr("src",b.image);else{b.loaded=[];b.numStartedLoad=0;a=function(a){n(this).off("load.rs error.rs");b.loaded.push(this);b.loaded.length===b.numStartedLoad&&e(b.loaded,!1)};for(var g=0;g<b.images.length;g++){var h=n("<img />");b.numStartedLoad++;h.on("load.rs error.rs",
a).attr("src",b.images[g])}}}},e=function(a,c){if(a.length){var d=a[0];if(c!==b.isBig)(d=b.holder.children())&&1<d.length&&l();else if(b.iW&&b.iH)g();else if(b.iW=d.width,b.iH=d.height,b.iW&&b.iH)g();else{var e=new Image;e.onload=function(){e.width?(b.iW=e.width,b.iH=e.height,g()):setTimeout(function(){e.width&&(b.iW=e.width,b.iH=e.height);g()},1E3)};e.src=d.src}}else g()},g=function(){b.isLoaded=!0;b.isLoading=!1;d();l();h()},d=function(){if(!b.isAppended&&c.ev){var a=c.st.visibleNearby,d=b.id-c._o;
f||b.appendOnLoaded||!c.st.fadeinLoadedSlide||0!==d&&(!(a||c._r2||c._l2)||-1!==d&&1!==d)||(a={visibility:"visible",opacity:0},a[c._g+"transition"]="opacity 400ms ease-in-out",b.content.css(a),setTimeout(function(){b.content.css("opacity",1)},16));b.holder.find(".rsPreloader").length?b.holder.append(b.content):b.holder.html(b.content);b.isAppended=!0;b.isLoaded&&(c._q2(b),h());b.sizeReady||(b.sizeReady=!0,setTimeout(function(){c.ev.trigger("rsMaybeSizeReady",b)},100))}},h=function(){!b.loadedTriggered&&
c.ev&&(b.isLoaded=b.loadedTriggered=!0,b.holder.trigger("rsAfterContentSet"),c.ev.trigger("rsAfterContentSet",b))},k=function(){c.st.usePreloader&&b.holder.html(c._q1.clone())},l=function(a){c.st.usePreloader&&(a=b.holder.find(".rsPreloader"),a.length&&a.remove())};b.isLoaded?d():f?!c._l&&b.images&&b.iW&&b.iH?a():(b.holder.isWaiting=!0,k(),b.holder.slideId=-99):a()},_p2:function(b,f,c){this._p1.append(b.holder);b.appendOnLoaded=!1},_g2:function(b,f){var c=this,a,e="touchstart"===b.type;c._s2=e;c.ev.trigger("rsDragStart");
if(n(b.target).closest(".rsNoDrag",c._r1).length)return c.dragSuccess=!1,!0;!f&&c._r2&&(c._t2=!0,c._u2());c.dragSuccess=!1;if(c._l2)e&&(c._v2=!0);else{e&&(c._v2=!1);c._w2();if(e){var g=b.originalEvent.touches;if(g&&0<g.length)a=g[0],1<g.length&&(c._v2=!0);else return}else b.preventDefault(),a=b,c.pointerEnabled&&(a=a.originalEvent);c._l2=!0;c._b.on(c._k1,function(a){c._x2(a,f)}).on(c._l1,function(a){c._y2(a,f)});c._z2="";c._a3=!1;c._b3=a.pageX;c._c3=a.pageY;c._d3=c._v=(f?c._e3:c._h)?a.pageX:a.pageY;
c._f3=0;c._g3=0;c._h3=f?c._i3:c._p;c._j3=(new Date).getTime();if(e)c._e1.on(c._m1,function(a){c._y2(a,f)})}},_k3:function(b,f){if(this._l3){var c=this._m3,a=b.pageX-this._b3,e=b.pageY-this._c3,g=this._h3+a,d=this._h3+e,h=f?this._e3:this._h,g=h?g:d,d=this._z2;this._a3=!0;this._b3=b.pageX;this._c3=b.pageY;"x"===d&&0!==a?this._f3=0<a?1:-1:"y"===d&&0!==e&&(this._g3=0<e?1:-1);d=h?this._b3:this._c3;a=h?a:e;f?g>this._n3?g=this._h3+a*this._n1:g<this._o3&&(g=this._h3+a*this._n1):this._z||(0>=this.currSlideId&&
0<d-this._d3&&(g=this._h3+a*this._n1),this.currSlideId>=this.numSlides-1&&0>d-this._d3&&(g=this._h3+a*this._n1));this._h3=g;200<c-this._j3&&(this._j3=c,this._v=d);f?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(b,f){var c=this,a,e="touchmove"===b.type;if(!c._s2||e){if(e){if(c._r3)return;var g=b.originalEvent.touches;if(g){if(1<g.length)return;a=g[0]}else return}else a=b,c.pointerEnabled&&(a=a.originalEvent);c._a3||(c._e&&(f?c._s3:c._p1).css(c._g+c._u1,"0s"),function h(){c._l2&&(c._t3=
requestAnimationFrame(h),c._u3&&c._k3(c._u3,f))}());if(c._l3)b.preventDefault(),c._m3=(new Date).getTime(),c._u3=a;else if(g=f?c._e3:c._h,a=Math.abs(a.pageX-c._b3)-Math.abs(a.pageY-c._c3)-(g?-7:7),7<a){if(g)b.preventDefault(),c._z2="x";else if(e){c._v3(b);return}c._l3=!0}else if(-7>a){if(!g)b.preventDefault(),c._z2="y";else if(e){c._v3(b);return}c._l3=!0}}},_v3:function(b,f){this._r3=!0;this._a3=this._l2=!1;this._y2(b)},_y2:function(b,f){function c(a){return 100>a?100:500<a?500:a}function a(a,b){if(e._l||
f)h=(-e._u-e._d1)*e._w,k=Math.abs(e._p-h),e._c=k/b,a&&(e._c+=250),e._c=c(e._c),e._x3(h,!1)}var e=this,g,d,h,k;g=-1<b.type.indexOf("touch");if(!e._s2||g)if(e._s2=!1,e.ev.trigger("rsDragRelease"),e._u3=null,e._l2=!1,e._r3=!1,e._l3=!1,e._m3=0,cancelAnimationFrame(e._t3),e._a3&&(f?e._q3(e._h3):e._l&&e._p3(e._h3)),e._b.off(e._k1).off(e._l1),g&&e._e1.off(e._m1),e._i1(),!e._a3&&!e._v2&&f&&e._w3){var l=n(b.target).closest(".rsNavItem");l.length&&e.goTo(l.index())}else{d=f?e._e3:e._h;if(!e._a3||"y"===e._z2&&
d||"x"===e._z2&&!d)if(!f&&e._t2){e._t2=!1;if(e.st.navigateByClick){e._i2(e.pointerEnabled?b.originalEvent:b);e.dragSuccess=!0;return}e.dragSuccess=!0}else{e._t2=!1;e.dragSuccess=!1;return}else e.dragSuccess=!0;e._t2=!1;e._z2="";var r=e.st.minSlideOffset;g=g?b.originalEvent.changedTouches[0]:e.pointerEnabled?b.originalEvent:b;var m=d?g.pageX:g.pageY,p=e._d3;g=e._v;var q=e.currSlideId,s=e.numSlides,v=d?e._f3:e._g3,u=e._z;Math.abs(m-p);g=m-g;d=(new Date).getTime()-e._j3;d=Math.abs(g)/d;if(0===v||1>=
s)a(!0,d);else{if(!u&&!f)if(0>=q){if(0<v){a(!0,d);return}}else if(q>=s-1&&0>v){a(!0,d);return}if(f){h=e._i3;if(h>e._n3)h=e._n3;else if(h<e._o3)h=e._o3;else{m=d*d/0.006;l=-e._i3;p=e._y3-e._z3+e._i3;0<g&&m>l?(l+=e._z3/(15/(m/d*0.003)),d=d*l/m,m=l):0>g&&m>p&&(p+=e._z3/(15/(m/d*0.003)),d=d*p/m,m=p);l=Math.max(Math.round(d/0.003),50);h+=m*(0>g?-1:1);if(h>e._n3){e._a4(h,l,!0,e._n3,200);return}if(h<e._o3){e._a4(h,l,!0,e._o3,200);return}}e._a4(h,l,!0)}else l=function(a){var b=Math.floor(a/e._w);a-b*e._w>
r&&b++;return b},p+r<m?0>v?a(!1,d):(l=l(m-p),e._m2(e.currSlideId-l,c(Math.abs(e._p-(-e._u-e._d1+l)*e._w)/d),!1,!0,!0)):p-r>m?0<v?a(!1,d):(l=l(p-m),e._m2(e.currSlideId+l,c(Math.abs(e._p-(-e._u-e._d1-l)*e._w)/d),!1,!0,!0)):a(!1,d)}}},_p3:function(b){b=this._p=b;this._e?this._p1.css(this._x1,this._y1+(this._h?b+this._z1+0:0+this._z1+b)+this._a2):this._p1.css(this._h?this._x1:this._w1,b)},updateSliderSize:function(b){var f,c;if(this.slider){if(this.st.autoScaleSlider){var a=this.st.autoScaleSliderWidth,
e=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(f=this.slider.width(),f!=this.width&&(this.slider.css("height",e/a*f),f=this.slider.width()),c=this.slider.height()):(c=this.slider.height(),c!=this.height&&(this.slider.css("width",a/e*c),c=this.slider.height()),f=this.slider.width())}else f=this.slider.width(),c=this.slider.height();if(b||f!=this.width||c!=this.height){this.width=f;this.height=c;this._b4=f;this._c4=c;this.ev.trigger("rsBeforeSizeSet");this.ev.trigger("rsAfterSizePropSet");
this._e1.css({width:this._b4,height:this._c4});this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;this._d4=this.st.imageScalePadding;for(f=0;f<this.slides.length;f++)b=this.slides[f],b.positionSet=!1,b&&b.images&&b.isLoaded&&(b.isRendered=!1,this._q2(b));if(this._e4)for(f=0;f<this._e4.length;f++)b=this._e4[f],b.holder.css(this._i,(b.id+this._d1)*this._w);this._n2();this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-this._d1)*this._w));this.ev.trigger("rsOnUpdateNav")}this._j2=
this._e1.offset();this._j2=this._j2[this._i]}},appendSlide:function(b,f){var c=this._s(b);if(isNaN(f)||f>this.numSlides)f=this.numSlides;this.slides.splice(f,0,c);this.slidesJQ.splice(f,0,n('<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>'));f<=this.currSlideId&&this.currSlideId++;this.ev.trigger("rsOnAppendSlide",[c,f]);this._f4(f);f===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(b){var f=this.slides[b];f&&(f.holder&&f.holder.remove(),
b<this.currSlideId&&this.currSlideId--,this.slides.splice(b,1),this.slidesJQ.splice(b,1),this.ev.trigger("rsOnRemoveSlide",[b]),this._f4(b),b===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_f4:function(b){var f=this;b=f.numSlides;b=0>=f._u?0:Math.floor(f._u/b);f.numSlides=f.slides.length;0===f.numSlides?(f.currSlideId=f._d1=f._u=0,f.currSlide=f._g4=null):f._u=b*f.numSlides+f.currSlideId;for(b=0;b<f.numSlides;b++)f.slides[b].id=b;f.currSlide=f.slides[f.currSlideId];f._r1=f.slidesJQ[f.currSlideId];
f.currSlideId>=f.numSlides?f.goTo(f.numSlides-1):0>f.currSlideId&&f.goTo(0);f._t();f._l&&f._p1.css(f._g+f._u1,"0ms");f._h4&&clearTimeout(f._h4);f._h4=setTimeout(function(){f._l&&f._p3((-f._u-f._d1)*f._w);f._n2();f._l||f._r1.css({display:"block",opacity:1})},14);f.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",
this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(b){this._m2("next",this.st.transitionSpeed,!0,!b)},prev:function(b){this._m2("prev",this.st.transitionSpeed,!0,!b)},_m2:function(b,f,c,a,e){var g=this,d,h,k;g.ev.trigger("rsBeforeMove",[b,a]);k="next"===b?g.currSlideId+1:"prev"===b?g.currSlideId-1:b=parseInt(b,10);if(!g._z){if(0>k){g._i4("left",!a);return}if(k>=g.numSlides){g._i4("right",!a);return}}g._r2&&(g._u2(!0),c=!1);h=k-g.currSlideId;k=g._o2=
g.currSlideId;var l=g.currSlideId+h;a=g._u;var n;g._z?(l=g._n2(!1,l),a+=h):a=l;g._o=l;g._g4=g.slidesJQ[g.currSlideId];g._u=a;g.currSlideId=g._o;g.currSlide=g.slides[g.currSlideId];g._r1=g.slidesJQ[g.currSlideId];var l=g.st.slidesDiff,m=Boolean(0<h);h=Math.abs(h);var p=Math.floor(k/g._y),q=Math.floor((k+(m?l:-l))/g._y),p=(m?Math.max(p,q):Math.min(p,q))*g._y+(m?g._y-1:0);p>g.numSlides-1?p=g.numSlides-1:0>p&&(p=0);k=m?p-k:k-p;k>g._y&&(k=g._y);if(h>k+l)for(g._d1+=(h-(k+l))*(m?-1:1),f*=1.4,k=0;k<g.numSlides;k++)g.slides[k].positionSet=
!1;g._c=f;g._n2(!0);e||(n=!0);d=(-a-g._d1)*g._w;n?setTimeout(function(){g._j4=!1;g._x3(d,b,!1,c);g.ev.trigger("rsOnUpdateNav")},0):(g._x3(d,b,!1,c),g.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display","block"),this._d2.css("display","block"),this._z||this.st.loopRewind||(0===this.currSlideId?this._c2.addClass("rsArrowDisabled"):this._c2.removeClass("rsArrowDisabled"),this.currSlideId===
this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(b,f,c,a,e){function g(){var a;h&&(a=h.data("rsTimeout"))&&(h!==k&&h.css({opacity:0,display:"none",zIndex:0}),clearTimeout(a),h.data("rsTimeout",""));if(a=k.data("rsTimeout"))clearTimeout(a),k.data("rsTimeout","")}var d=this,h,k,l={};isNaN(d._c)&&(d._c=400);d._p=d._h3=b;d.ev.trigger("rsBeforeAnimStart");d._e?d._l?(d._c=parseInt(d._c,10),c=d._g+d._v1,l[d._g+d._u1]=d._c+"ms",l[c]=a?n.rsCSS3Easing[d.st.easeInOut]:
n.rsCSS3Easing[d.st.easeOut],d._p1.css(l),a||!d.hasTouch?setTimeout(function(){d._p3(b)},5):d._p3(b)):(d._c=d.st.transitionSpeed,h=d._g4,k=d._r1,k.data("rsTimeout")&&k.css("opacity",0),g(),h&&h.data("rsTimeout",setTimeout(function(){l[d._g+d._u1]="0ms";l.zIndex=0;l.display="none";h.data("rsTimeout","");h.css(l);setTimeout(function(){h.css("opacity",0)},16)},d._c+60)),l.display="block",l.zIndex=d._m,l.opacity=0,l[d._g+d._u1]="0ms",l[d._g+d._v1]=n.rsCSS3Easing[d.st.easeInOut],k.css(l),k.data("rsTimeout",
setTimeout(function(){k.css(d._g+d._u1,d._c+"ms");k.data("rsTimeout",setTimeout(function(){k.css("opacity",1);k.data("rsTimeout","")},20))},20))):d._l?(l[d._h?d._x1:d._w1]=b+"px",d._p1.animate(l,d._c,a?d.st.easeInOut:d.st.easeOut)):(h=d._g4,k=d._r1,k.stop(!0,!0).css({opacity:0,display:"block",zIndex:d._m}),d._c=d.st.transitionSpeed,k.animate({opacity:1},d._c,d.st.easeInOut),g(),h&&h.data("rsTimeout",setTimeout(function(){h.stop(!0,!0).css({opacity:0,display:"none",zIndex:0})},d._c+60)));d._r2=!0;
d.loadingTimeout&&clearTimeout(d.loadingTimeout);d.loadingTimeout=e?setTimeout(function(){d.loadingTimeout=null;e.call()},d._c+60):setTimeout(function(){d.loadingTimeout=null;d._k4(f)},d._c+60)},_u2:function(b){this._r2=!1;clearTimeout(this.loadingTimeout);if(this._l)if(!this._e)this._p1.stop(!0),this._p=parseInt(this._p1.css(this._x1),10);else{if(!b){b=this._p;var f=this._h3=this._l4();this._p1.css(this._g+this._u1,"0ms");b!==f&&this._p3(f)}}else 20<this._m?this._m=10:this._m++},_l4:function(){var b=
window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),f=0===b[0].indexOf("matrix3d");return parseInt(b[this._h?f?12:4:f?13:5],10)},_m4:function(b,f){return this._e?this._y1+(f?b+this._z1+0:0+this._z1+b)+this._a2:b},_k4:function(b){this._l||(this._r1.css("z-index",0),this._m=10);this._r2=!1;this.staticSlideId=this.currSlideId;this._n2();this._n4=!1;this.ev.trigger("rsAfterSlideChange")},_i4:function(b,f){var c=this,a=(-c._u-c._d1)*
c._w;if(0!==c.numSlides&&!c._r2)if(c.st.loopRewind)c.goTo("left"===b?c.numSlides-1:0,f);else if(c._l){c._c=200;var e=function(){c._r2=!1};c._x3(a+("left"===b?30:-30),"",!1,!0,function(){c._r2=!1;c._x3(a,"",!1,!0,e)})}},_q2:function(b,f){if(!b.isRendered){var c=b.content,a="rsMainSlideImage",e,g=this.st.imageAlignCenter,d=this.st.imageScaleMode,h;b.videoURL&&(a="rsVideoContainer","fill"!==d?e=!0:(h=c,h.hasClass(a)||(h=h.find("."+a)),h.css({width:"100%",height:"100%"}),a="rsMainSlideImage"));c.hasClass(a)||
(c=c.find("."+a));if(c){var k=b.iW,l=b.iH;b.isRendered=!0;if("none"!==d||g){a="fill"!==d?this._d4:0;h=this._b4-2*a;var n=this._c4-2*a,m,p,q={};"fit-if-smaller"===d&&(k>h||l>n)&&(d="fit");if("fill"===d||"fit"===d)m=h/k,p=n/l,m="fill"==d?m>p?m:p:"fit"==d?m<p?m:p:1,k=Math.ceil(k*m,10),l=Math.ceil(l*m,10);"none"!==d&&(q.width=k,q.height=l,e&&c.find(".rsImg").css({width:"100%",height:"100%"}));g&&(q.marginLeft=Math.floor((h-k)/2)+a,q.marginTop=Math.floor((n-l)/2)+a);c.css(q)}}}}};n.rsProto=u.prototype;
n.fn.royalSlider=function(b){var f=arguments;return this.each(function(){var c=n(this);if("object"!==typeof b&&b){if((c=c.data("royalSlider"))&&c[b])return c[b].apply(c,Array.prototype.slice.call(f,1))}else c.data("royalSlider")||c.data("royalSlider",new u(c,b))})};n.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",controlsInside:!0,
arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,slidesDiff:2};
n.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"};n.extend(jQuery.easing,{easeInOutSine:function(b,f,c,a,e){return-a/2*(Math.cos(Math.PI*f/e)-1)+c},easeOutSine:function(b,f,c,a,e){return a*Math.sin(f/e*(Math.PI/2))+c},easeOutCubic:function(b,f,c,a,e){return a*((f=f/e-1)*f*f+1)+c}})})(jQuery,window);
// jquery.rs.active-class v1.0.1
(function(c){c.rsProto._o4=function(){var b,a=this;if(a.st.addActiveClass)a.ev.on("rsOnUpdateNav",function(){b&&clearTimeout(b);b=setTimeout(function(){a._g4&&a._g4.removeClass("rsActiveSlide");a._r1&&a._r1.addClass("rsActiveSlide");b=null},50)})};c.rsModules.activeClass=c.rsProto._o4})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function(l){l.extend(l.rsProto,{_p4:function(){function m(){var g=a.currSlide;if(a.currSlide&&a.currSlide.isLoaded&&a._t4!==g){if(0<a._s4.length){for(b=0;b<a._s4.length;b++)clearTimeout(a._s4[b]);a._s4=[]}if(0<a._r4.length){var f;for(b=0;b<a._r4.length;b++)if(f=a._r4[b])a._e?(f.block.css(a._g+a._u1,"0s"),f.block.css(f.css)):f.block.stop(!0).css(f.css),a._t4=null,g.animBlocksDisplayed=!1;a._r4=[]}g.animBlocks&&(g.animBlocksDisplayed=!0,a._t4=g,a._u4(g.animBlocks))}}var a=this,b;a._q4={fadeEffect:!0,
moveEffect:"top",moveOffset:20,speed:400,easing:"easeOutSine",delay:200};a.st.block=l.extend({},a._q4,a.st.block);a._r4=[];a._s4=[];a.ev.on("rsAfterInit",function(){m()});a.ev.on("rsBeforeParseNode",function(a,b,d){b=l(b);d.animBlocks=b.find(".rsABlock").css("display","none");d.animBlocks.length||(b.hasClass("rsABlock")?d.animBlocks=b.css("display","none"):d.animBlocks=!1)});a.ev.on("rsAfterContentSet",function(b,f){f.id===a.slides[a.currSlideId].id&&setTimeout(function(){m()},a.st.fadeinLoadedSlide?
300:0)});a.ev.on("rsAfterSlideChange",function(){m()})},_v4:function(l,a){setTimeout(function(){l.css(a)},6)},_u4:function(m){var a=this,b,g,f,d,h,e,n;a._s4=[];m.each(function(m){b=l(this);g={};f={};d=null;var c=b.attr("data-move-offset"),c=c?parseInt(c,10):a.st.block.moveOffset;if(0<c&&((e=b.data("move-effect"))?(e=e.toLowerCase(),"none"===e?e=!1:"left"!==e&&"top"!==e&&"bottom"!==e&&"right"!==e&&(e=a.st.block.moveEffect,"none"===e&&(e=!1))):e=a.st.block.moveEffect,e&&"none"!==e)){var p;p="right"===
e||"left"===e?!0:!1;var k;n=!1;a._e?(k=0,h=a._x1):(p?isNaN(parseInt(b.css("right"),10))?h="left":(h="right",n=!0):isNaN(parseInt(b.css("bottom"),10))?h="top":(h="bottom",n=!0),h="margin-"+h,n&&(c=-c),a._e?k=parseInt(b.css(h),10):(k=b.data("rs-start-move-prop"),void 0===k&&(k=parseInt(b.css(h),10),isNaN(k)&&(k=0),b.data("rs-start-move-prop",k))));f[h]=a._m4("top"===e||"left"===e?k-c:k+c,p);g[h]=a._m4(k,p)}c=b.attr("data-fade-effect");if(!c)c=a.st.block.fadeEffect;else if("none"===c.toLowerCase()||
"false"===c.toLowerCase())c=!1;c&&(f.opacity=0,g.opacity=1);if(c||e)d={},d.hasFade=Boolean(c),Boolean(e)&&(d.moveProp=h,d.hasMove=!0),d.speed=b.data("speed"),isNaN(d.speed)&&(d.speed=a.st.block.speed),d.easing=b.data("easing"),d.easing||(d.easing=a.st.block.easing),d.css3Easing=l.rsCSS3Easing[d.easing],d.delay=b.data("delay"),isNaN(d.delay)&&(d.delay=a.st.block.delay*m);c={};a._e&&(c[a._g+a._u1]="0ms");c.moveProp=g.moveProp;c.opacity=g.opacity;c.display="none";a._r4.push({block:b,css:c});a._v4(b,
f);a._s4.push(setTimeout(function(b,d,c,e){return function(){b.css("display","block");if(c){var g={};if(a._e){var f="";c.hasMove&&(f+=c.moveProp);c.hasFade&&(c.hasMove&&(f+=", "),f+="opacity");g[a._g+a._t1]=f;g[a._g+a._u1]=c.speed+"ms";g[a._g+a._v1]=c.css3Easing;b.css(g);setTimeout(function(){b.css(d)},24)}else setTimeout(function(){b.animate(d,c.speed,c.easing)},16)}delete a._s4[e]}}(b,g,d,m),6>=d.delay?12:d.delay))})}});l.rsModules.animatedBlocks=l.rsProto._p4})(jQuery);
// jquery.rs.auto-height v1.0.3
(function(b){b.extend(b.rsProto,{_w4:function(){var a=this;if(a.st.autoHeight){var b,c,e,f=!0,d=function(d){e=a.slides[a.currSlideId];(b=e.holder)&&(c=b.height())&&void 0!==c&&c>(a.st.minAutoHeight||30)&&(a._c4=c,a._e||!d?a._e1.css("height",c):a._e1.stop(!0,!0).animate({height:c},a.st.transitionSpeed),a.ev.trigger("rsAutoHeightChange",c),f&&(a._e&&setTimeout(function(){a._e1.css(a._g+"transition","height "+a.st.transitionSpeed+"ms ease-in-out")},16),f=!1))};a.ev.on("rsMaybeSizeReady.rsAutoHeight",
function(a,b){e===b&&d()});a.ev.on("rsAfterContentSet.rsAutoHeight",function(a,b){e===b&&d()});a.slider.addClass("rsAutoHeight");a.ev.one("rsAfterInit",function(){setTimeout(function(){d(!1);setTimeout(function(){a.slider.append('<div style="clear:both; float: none;"></div>')},16)},16)});a.ev.on("rsBeforeAnimStart",function(){d(!0)});a.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){d(!1)},16)})}}});b.rsModules.autoHeight=b.rsProto._w4})(jQuery);
// jquery.rs.autoplay v1.0.5
(function(b){b.extend(b.rsProto,{_x4:function(){var a=this,d;a._y4={enabled:!1,stopAtAction:!0,pauseOnHover:!0,delay:2E3};!a.st.autoPlay&&a.st.autoplay&&(a.st.autoPlay=a.st.autoplay);a.st.autoPlay=b.extend({},a._y4,a.st.autoPlay);a.st.autoPlay.enabled&&(a.ev.on("rsBeforeParseNode",function(a,c,f){c=b(c);if(d=c.attr("data-rsDelay"))f.customDelay=parseInt(d,10)}),a.ev.one("rsAfterInit",function(){a._z4()}),a.ev.on("rsBeforeDestroy",function(){a.stopAutoPlay();a.slider.off("mouseenter mouseleave");b(window).off("blur"+
a.ns+" focus"+a.ns)}))},_z4:function(){var a=this;a.startAutoPlay();a.ev.on("rsAfterContentSet",function(b,e){a._l2||a._r2||!a._a5||e!==a.currSlide||a._b5()});a.ev.on("rsDragRelease",function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.ev.on("rsAfterSlideChange",function(){a._a5&&a._c5&&(a._c5=!1,a.currSlide.isLoaded&&a._b5())});a.ev.on("rsDragStart",function(){a._a5&&(a.st.autoPlay.stopAtAction?a.stopAutoPlay():(a._c5=!0,a._d5()))});a.ev.on("rsBeforeMove",function(b,e,c){a._a5&&(c&&a.st.autoPlay.stopAtAction?
a.stopAutoPlay():(a._c5=!0,a._d5()))});a._e5=!1;a.ev.on("rsVideoStop",function(){a._a5&&(a._e5=!1,a._b5())});a.ev.on("rsVideoPlay",function(){a._a5&&(a._c5=!1,a._d5(),a._e5=!0)});b(window).on("blur"+a.ns,function(){a._a5&&(a._c5=!0,a._d5())}).on("focus"+a.ns,function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.st.autoPlay.pauseOnHover&&(a._f5=!1,a.slider.hover(function(){a._a5&&(a._c5=!1,a._d5(),a._f5=!0)},function(){a._a5&&(a._f5=!1,a._b5())}))},toggleAutoPlay:function(){this._a5?this.stopAutoPlay():
this.startAutoPlay()},startAutoPlay:function(){this._a5=!0;this.currSlide.isLoaded&&this._b5()},stopAutoPlay:function(){this._e5=this._f5=this._c5=this._a5=!1;this._d5()},_b5:function(){var a=this;a._f5||a._e5||(a._g5=!0,a._h5&&clearTimeout(a._h5),a._h5=setTimeout(function(){var b;a._z||a.st.loopRewind||(b=!0,a.st.loopRewind=!0);a.next(!0);b&&(a.st.loopRewind=!1)},a.currSlide.customDelay?a.currSlide.customDelay:a.st.autoPlay.delay))},_d5:function(){this._f5||this._e5||(this._g5=!1,this._h5&&(clearTimeout(this._h5),
this._h5=null))}});b.rsModules.autoplay=b.rsProto._x4})(jQuery);
// jquery.rs.bullets v1.0.1
(function(c){c.extend(c.rsProto,{_i5:function(){var a=this;"bullets"===a.st.controlNavigation&&(a.ev.one("rsAfterPropsSetup",function(){a._j5=!0;a.slider.addClass("rsWithBullets");for(var b='<div class="rsNav rsBullets">',e=0;e<a.numSlides;e++)b+='<div class="rsNavItem rsBullet"><span></span></div>';a._k5=b=c(b+"</div>");a._l5=b.appendTo(a.slider).children();a._k5.on("click.rs",".rsNavItem",function(b){a._m5||a.goTo(c(this).index())})}),a.ev.on("rsOnAppendSlide",function(b,c,d){d>=a.numSlides?a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>'):
a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(b,c){var d=a._l5.eq(c);d&&d.length&&(d.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var b=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");b=a._l5.eq(b);b.addClass("rsNavSelected");a._n5=b}))}});c.rsModules.bullets=c.rsProto._i5})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function(d){d.extend(d.rsProto,{_o5:function(){var a=this,l,g,f;a._p5={enabled:!1,change:!1,prefix:""};a.st.deeplinking=d.extend({},a._p5,a.st.deeplinking);if(a.st.deeplinking.enabled){var k=a.st.deeplinking.change,c=a.st.deeplinking.prefix,e="#"+c,h=function(){var b=window.location.hash;return b&&0<b.indexOf(c)&&(b=parseInt(b.substring(e.length),10),0<=b)?b-1:-1},m=h();-1!==m&&(a.st.startSlideId=m);k&&(d(window).on("hashchange"+a.ns,function(b){l||(b=h(),0>b||(b>a.numSlides-1&&(b=a.numSlides-1),
a.goTo(b)))}),a.ev.on("rsBeforeAnimStart",function(){g&&clearTimeout(g);f&&clearTimeout(f)}),a.ev.on("rsAfterSlideChange",function(){g&&clearTimeout(g);f&&clearTimeout(f);f=setTimeout(function(){l=!0;window.location.replace((""+window.location).split("#")[0]+e+(a.currSlideId+1));g=setTimeout(function(){l=!1;g=null},60)},400)}));a.ev.on("rsBeforeDestroy",function(){g=f=null;k&&d(window).off("hashchange"+a.ns)})}}});d.rsModules.deeplinking=d.rsProto._o5})(jQuery);
(function(d,a,l){function g(b){b=b||location.href;return"#"+b.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var f="hashchange",k=document,c,e=d.event.special,h=k.documentMode,m="on"+f in a&&(h===l||7<h);d.fn[f]=function(b){return b?this.bind(f,b):this.trigger(f)};d.fn[f].delay=50;e[f]=d.extend(e[f],{setup:function(){if(m)return!1;d(c.start)},teardown:function(){if(m)return!1;d(c.stop)}});c=function(){function b(){var c=g(),n=r(h);c!==h?(p(h=c,n),d(a).trigger(f)):n!==h&&(location.href=location.href.replace(/#.*/,
"")+n);e=setTimeout(b,d.fn[f].delay)}var c={},e,h=g(),q=function(b){return b},p=q,r=q;c.start=function(){e||b()};c.stop=function(){e&&clearTimeout(e);e=l};a.attachEvent&&!a.addEventListener&&!m&&function(){var a,e;c.start=function(){a||(e=(e=d.fn[f].src)&&e+g(),a=d('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){e||p(g());b()}).attr("src",e||"javascript:0").insertAfter("body")[0].contentWindow,k.onpropertychange=function(){try{"title"===event.propertyName&&(a.document.title=
k.title)}catch(b){}})};c.stop=q;r=function(){return g(a.location.href)};p=function(b,e){var c=a.document,g=d.fn[f].domain;b!==e&&(c.title=k.title,c.open(),g&&c.write('<script>document.domain="'+g+'"\x3c/script>'),c.close(),a.location.hash=b)}}();return c}()})(jQuery,this);
// jquery.rs.fullscreen v1.0.6
(function(c){c.extend(c.rsProto,{_q5:function(){var a=this;a._r5={enabled:!1,keyboardNav:!0,buttonFS:!0,nativeFS:!1,doubleTap:!0};a.st.fullscreen=c.extend({},a._r5,a.st.fullscreen);if(a.st.fullscreen.enabled)a.ev.one("rsBeforeSizeSet",function(){a._s5()})},_s5:function(){var a=this;a._t5=!a.st.keyboardNavEnabled&&a.st.fullscreen.keyboardNav;if(a.st.fullscreen.nativeFS){var b={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",
prefix:""},d=["webkit","moz","o","ms","khtml"];if("undefined"!=typeof document.cancelFullScreen)b.supportsFullScreen=!0;else for(var e=0,f=d.length;e<f;e++)if(b.prefix=d[e],"undefined"!=typeof document[b.prefix+"CancelFullScreen"]){b.supportsFullScreen=!0;break}b.supportsFullScreen?(a.nativeFS=!0,b.fullScreenEventName=b.prefix+"fullscreenchange"+a.ns,b.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;default:return document[this.prefix+
"FullScreen"]}},b.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},b.cancelFullScreen=function(a){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()},a._u5=b):a._u5=!1}a.st.fullscreen.buttonFS&&(a._v5=c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs",function(){a.isFullscreen?a.exitFullscreen():a.enterFullscreen()}))},enterFullscreen:function(a){var b=
this;if(b._u5)if(a)b._u5.requestFullScreen(c("html")[0]);else{b._b.on(b._u5.fullScreenEventName,function(a){b._u5.isFullScreen()?b.enterFullscreen(!0):b.exitFullscreen(!0)});b._u5.requestFullScreen(c("html")[0]);return}if(!b._w5){b._w5=!0;b._b.on("keyup"+b.ns+"fullscreen",function(a){27===a.keyCode&&b.exitFullscreen()});b._t5&&b._b2();a=c(window);b._x5=a.scrollTop();b._y5=a.scrollLeft();b._z5=c("html").attr("style");b._a6=c("body").attr("style");b._b6=b.slider.attr("style");c("body, html").css({overflow:"hidden",
height:"100%",width:"100%",margin:"0",padding:"0"});b.slider.addClass("rsFullscreen");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!0,a.isMedLoaded=a.isLoaded,a.isMedLoading=a.isLoading,a.medImage=a.image,a.medIW=a.iW,a.medIH=a.iH,a.slideId=-99,a.bigImage!==a.medImage&&(a.sizeType="big"),a.isLoaded=a.isBigLoaded,a.isLoading=!1,a.image=a.bigImage,a.images[0]=a.bigImage,a.iW=a.bigIW,a.iH=a.bigIH,a.isAppended=a.contentAdded=!1,b._c6(a));b.isFullscreen=!0;b._w5=!1;
b.updateSliderSize();b.ev.trigger("rsEnterFullscreen")}},exitFullscreen:function(a){var b=this;if(b._u5){if(!a){b._u5.cancelFullScreen(c("html")[0]);return}b._b.off(b._u5.fullScreenEventName)}if(!b._w5){b._w5=!0;b._b.off("keyup"+b.ns+"fullscreen");b._t5&&b._b.off("keydown"+b.ns);c("html").attr("style",b._z5||"");c("body").attr("style",b._a6||"");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!1,a.slideId=-99,a.isBigLoaded=a.isLoaded,a.isBigLoading=a.isLoading,a.bigImage=
a.image,a.bigIW=a.iW,a.bigIH=a.iH,a.isLoaded=a.isMedLoaded,a.isLoading=!1,a.image=a.medImage,a.images[0]=a.medImage,a.iW=a.medIW,a.iH=a.medIH,a.isAppended=a.contentAdded=!1,b._c6(a,!0),a.bigImage!==a.medImage&&(a.sizeType="med"));b.isFullscreen=!1;a=c(window);a.scrollTop(b._x5);a.scrollLeft(b._y5);b._w5=!1;b.slider.removeClass("rsFullscreen");b.updateSliderSize();setTimeout(function(){b.updateSliderSize()},1);b.ev.trigger("rsExitFullscreen")}},_c6:function(a,b){var d=a.isLoaded||a.isLoading?'<img class="rsImg rsMainSlideImage" src="'+
a.image+'"/>':'<a class="rsImg rsMainSlideImage" href="'+a.image+'"></a>';a.content.hasClass("rsImg")?a.content=c(d):a.content.find(".rsImg").eq(0).replaceWith(d);a.isLoaded||a.isLoading||!a.holder||a.holder.html(a.content)}});c.rsModules.fullscreen=c.rsProto._q5})(jQuery);
// jquery.rs.global-caption v1.0
(function(b){b.extend(b.rsProto,{_d6:function(){var a=this;a.st.globalCaption&&(a.ev.on("rsAfterInit",function(){a.globalCaption=b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside?a._e1:a.slider);a.globalCaption.html(a.currSlide.caption)}),a.ev.on("rsBeforeAnimStart",function(){a.globalCaption.html(a.currSlide.caption)}))}});b.rsModules.globalCaption=b.rsProto._d6})(jQuery);
// jquery.rs.nav-auto-hide v1.0
(function(b){b.extend(b.rsProto,{_e6:function(){var a=this;if(a.st.navAutoHide&&!a.hasTouch)a.ev.one("rsAfterInit",function(){if(a._k5){a._k5.addClass("rsHidden");var b=a.slider;b.one("mousemove.controlnav",function(){a._k5.removeClass("rsHidden")});b.hover(function(){a._k5.removeClass("rsHidden")},function(){a._k5.addClass("rsHidden")})}})}});b.rsModules.autoHideNav=b.rsProto._e6})(jQuery);
// jquery.rs.tabs v1.0.2
(function(e){e.extend(e.rsProto,{_f6:function(){var a=this;"tabs"===a.st.controlNavigation&&(a.ev.on("rsBeforeParseNode",function(a,d,b){d=e(d);b.thumbnail=d.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=e(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=d.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=d.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._g6()}),a.ev.on("rsOnAppendSlide",
function(c,d,b){b>=a.numSlides?a._k5.append('<div class="rsNavItem rsTab">'+d.thumbnail+"</div>"):a._l5.eq(b).before('<div class="rsNavItem rsTab">'+item.thumbnail+"</div>");a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(c,d){var b=a._l5.eq(d);b&&(b.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var c=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");c=a._l5.eq(c);c.addClass("rsNavSelected");a._n5=c}))},_g6:function(){var a=this,c;a._j5=!0;c='<div class="rsNav rsTabs">';
for(var d=0;d<a.numSlides;d++)c+='<div class="rsNavItem rsTab">'+a.slides[d].thumbnail+"</div>";c=e(c+"</div>");a._k5=c;a._l5=c.children(".rsNavItem");a.slider.append(c);a._k5.click(function(b){b=e(b.target).closest(".rsNavItem");b.length&&a.goTo(b.index())})}});e.rsModules.tabs=e.rsProto._f6})(jQuery);
// jquery.rs.thumbnails v1.0.7
(function(f){f.extend(f.rsProto,{_h6:function(){var a=this;"thumbnails"===a.st.controlNavigation&&(a._i6={drag:!0,touch:!0,orientation:"horizontal",navigation:!0,arrows:!0,arrowLeft:null,arrowRight:null,spacing:4,arrowsAutoHide:!1,appendSpan:!1,transitionSpeed:600,autoCenter:!0,fitInViewport:!0,firstMargin:!0,paddingTop:0,paddingBottom:0},a.st.thumbs=f.extend({},a._i6,a.st.thumbs),a._j6=!0,!1===a.st.thumbs.firstMargin?a.st.thumbs.firstMargin=0:!0===a.st.thumbs.firstMargin&&(a.st.thumbs.firstMargin=
a.st.thumbs.spacing),a.ev.on("rsBeforeParseNode",function(a,b,c){b=f(b);c.thumbnail=b.find(".rsTmb").remove();c.thumbnail.length?c.thumbnail=f(document.createElement("div")).append(c.thumbnail).html():(c.thumbnail=b.attr("data-rsTmb"),c.thumbnail||(c.thumbnail=b.find(".rsImg").attr("data-rsTmb")),c.thumbnail=c.thumbnail?'<img src="'+c.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._k6()}),a._n5=null,a.ev.on("rsOnUpdateNav",function(){var e=f(a._l5[a.currSlideId]);e!==a._n5&&(a._n5&&
(a._n5.removeClass("rsNavSelected"),a._n5=null),a._l6&&a._m6(a.currSlideId),a._n5=e.addClass("rsNavSelected"))}),a.ev.on("rsOnAppendSlide",function(e,b,c){e="<div"+a._n6+' class="rsNavItem rsThumb">'+a._o6+b.thumbnail+"</div>";a._e&&a._s3.css(a._g+"transition-duration","0ms");c>=a.numSlides?a._s3.append(e):a._l5.eq(c).before(e);a._l5=a._s3.children();a.updateThumbsSize(!0)}),a.ev.on("rsOnRemoveSlide",function(e,b){var c=a._l5.eq(b);c&&(a._e&&a._s3.css(a._g+"transition-duration","0ms"),c.remove(),
a._l5=a._s3.children(),a.updateThumbsSize(!0))}))},_k6:function(){var a=this,e="rsThumbs",b=a.st.thumbs,c="",g,d,h=b.spacing;a._j5=!0;a._e3="vertical"===b.orientation?!1:!0;a._n6=g=h?' style="margin-'+(a._e3?"right":"bottom")+":"+h+'px;"':"";a._i3=0;a._p6=!1;a._m5=!1;a._l6=!1;a._q6=b.arrows&&b.navigation;d=a._e3?"Hor":"Ver";a.slider.addClass("rsWithThumbs rsWithThumbs"+d);c+='<div class="rsNav rsThumbs rsThumbs'+d+'"><div class="'+e+'Container">';a._o6=b.appendSpan?'<span class="thumbIco"></span>':
"";for(var k=0;k<a.numSlides;k++)d=a.slides[k],c+="<div"+g+' class="rsNavItem rsThumb">'+d.thumbnail+a._o6+"</div>";c=f(c+"</div></div>");g={};b.paddingTop&&(g[a._e3?"paddingTop":"paddingLeft"]=b.paddingTop);b.paddingBottom&&(g[a._e3?"paddingBottom":"paddingRight"]=b.paddingBottom);c.css(g);a._s3=f(c).find("."+e+"Container");a._q6&&(e+="Arrow",b.arrowLeft?a._r6=b.arrowLeft:(a._r6=f('<div class="'+e+" "+e+'Left"><div class="'+e+'Icn"></div></div>'),c.append(a._r6)),b.arrowRight?a._s6=b.arrowRight:
(a._s6=f('<div class="'+e+" "+e+'Right"><div class="'+e+'Icn"></div></div>'),c.append(a._s6)),a._r6.click(function(){var b=(Math.floor(a._i3/a._t6)+a._u6)*a._t6+a.st.thumbs.firstMargin;a._a4(b>a._n3?a._n3:b)}),a._s6.click(function(){var b=(Math.floor(a._i3/a._t6)-a._u6)*a._t6+a.st.thumbs.firstMargin;a._a4(b<a._o3?a._o3:b)}),b.arrowsAutoHide&&!a.hasTouch&&(a._r6.css("opacity",0),a._s6.css("opacity",0),c.one("mousemove.rsarrowshover",function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))}),
c.hover(function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))},function(){a._l6&&(a._r6.css("opacity",0),a._s6.css("opacity",0))})));a._k5=c;a._l5=a._s3.children();a.msEnabled&&a.st.thumbs.navigation&&a._s3.css("-ms-touch-action",a._e3?"pan-y":"pan-x");a.slider.append(c);a._w3=!0;a._v6=h;b.navigation&&a._e&&a._s3.css(a._g+"transition-property",a._g+"transform");a._k5.on("click.rs",".rsNavItem",function(b){a._m5||a.goTo(f(this).index())});a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",
function(){a._w6=a._e3?a._c4:a._b4;a.updateThumbsSize(!0)});a.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs",function(b,c){a.updateThumbsSize(!0,c)})},updateThumbsSize:function(a,e){var b=this,c=b._l5.first(),f={},d=b._l5.length;b._t6=(b._e3?c.outerWidth():c.outerHeight())+b._v6;b._y3=d*b._t6-b._v6;f[b._e3?"width":"height"]=b._y3+b._v6;b._z3=b._e3?b._k5.width():void 0!==e?e:b._k5.height();b._w3&&(b.isFullscreen||b.st.thumbs.fitInViewport)&&(b._e3?b._c4=b._w6-b._k5.outerHeight():
b._b4=b._w6-b._k5.outerWidth());b._z3&&(b._o3=-(b._y3-b._z3)-b.st.thumbs.firstMargin,b._n3=b.st.thumbs.firstMargin,b._u6=Math.floor(b._z3/b._t6),b._y3<b._z3?(b.st.thumbs.autoCenter&&b._q3((b._z3-b._y3)/2),b.st.thumbs.arrows&&b._r6&&(b._r6.addClass("rsThumbsArrowDisabled"),b._s6.addClass("rsThumbsArrowDisabled")),b._l6=!1,b._m5=!1,b._k5.off(b._j1)):b.st.thumbs.navigation&&!b._l6&&(b._l6=!0,!b.hasTouch&&b.st.thumbs.drag||b.hasTouch&&b.st.thumbs.touch)&&(b._m5=!0,b._k5.on(b._j1,function(a){b._g2(a,!0)})),
b._s3.css(f),a&&e&&b._m6(b.currSlideId,!0))},setThumbsOrientation:function(a,e){this._w3&&(this.st.thumbs.orientation=a,this._k5.remove(),this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"),this._k6(),this._k5.off(this._j1),e||this.updateSliderSize(!0))},_q3:function(a){this._i3=a;this._e?this._s3.css(this._x1,this._y1+(this._e3?a+this._z1+0:0+this._z1+a)+this._a2):this._s3.css(this._e3?this._x1:this._w1,a)},_a4:function(a,e,b,c,g){var d=this;if(d._l6){e||(e=d.st.thumbs.transitionSpeed);d._i3=
a;d._x6&&clearTimeout(d._x6);d._p6&&(d._e||d._s3.stop(),b=!0);var h={};d._p6=!0;d._e?(h[d._g+"transition-duration"]=e+"ms",h[d._g+"transition-timing-function"]=b?f.rsCSS3Easing[d.st.easeOut]:f.rsCSS3Easing[d.st.easeInOut],d._s3.css(h),d._q3(a)):(h[d._e3?d._x1:d._w1]=a+"px",d._s3.animate(h,e,b?"easeOutCubic":d.st.easeInOut));c&&(d._i3=c);d._y6();d._x6=setTimeout(function(){d._p6=!1;g&&(d._a4(c,g,!0),g=null)},e)}},_y6:function(){this._q6&&(this._i3===this._n3?this._r6.addClass("rsThumbsArrowDisabled"):
this._r6.removeClass("rsThumbsArrowDisabled"),this._i3===this._o3?this._s6.addClass("rsThumbsArrowDisabled"):this._s6.removeClass("rsThumbsArrowDisabled"))},_m6:function(a,e){var b=0,c,f=a*this._t6+2*this._t6-this._v6+this._n3,d=Math.floor(this._i3/this._t6);this._l6&&(this._j6&&(e=!0,this._j6=!1),f+this._i3>this._z3?(a===this.numSlides-1&&(b=1),d=-a+this._u6-2+b,c=d*this._t6+this._z3%this._t6+this._v6-this._n3):0!==a?(a-1)*this._t6<=-this._i3+this._n3&&a-1<=this.numSlides-this._u6&&(c=(-a+1)*this._t6+
this._n3):c=this._n3,c!==this._i3&&(b=void 0===c?this._i3:c,b>this._n3?this._q3(this._n3):b<this._o3?this._q3(this._o3):void 0!==c&&(e?this._q3(c):this._a4(c))),this._y6())}});f.rsModules.thumbnails=f.rsProto._h6})(jQuery);
// jquery.rs.video v1.1.3
(function(f){f.extend(f.rsProto,{_z6:function(){var a=this;a._a7={autoHideArrows:!0,autoHideControlNav:!1,autoHideBlocks:!1,autoHideCaption:!1,disableCSS3inFF:!0,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'};a.st.video=f.extend({},a._a7,
a.st.video);a.ev.on("rsBeforeSizeSet",function(){a._b7&&setTimeout(function(){var b=a._r1,b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer");a._c7&&a._c7.css({width:b.width(),height:b.height()})},32)});var d=a._a.mozilla;a.ev.on("rsAfterParseNode",function(b,c,e){b=f(c);if(e.videoURL){a.st.video.disableCSS3inFF&&d&&(a._e=a._f=!1);c=f('<div class="rsVideoContainer"></div>');var g=f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');b.hasClass("rsImg")?
e.content=c.append(b).append(g):e.content.find(".rsImg").wrap(c).after(g)}});a.ev.on("rsAfterSlideChange",function(){a.stopVideo()})},toggleVideo:function(){return this._b7?this.stopVideo():this.playVideo()},playVideo:function(){var a=this;if(!a._b7){var d=a.currSlide;if(!d.videoURL)return!1;a._d7=d;var b=a._e7=d.content,d=d.videoURL,c,e;d.match(/youtu\.be/i)||d.match(/youtube\.com/i)?(e=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,(e=d.match(e))&&11==e[7].length&&
(c=e[7]),void 0!==c&&(a._c7=a.st.video.youTubeCode.replace("%id%",c))):d.match(/vimeo\.com/i)&&(e=/(www\.)?vimeo.com\/(\d+)($|\/)/,(e=d.match(e))&&(c=e[2]),void 0!==c&&(a._c7=a.st.video.vimeoCode.replace("%id%",c)));a.videoObj=f(a._c7);a.ev.trigger("rsOnCreateVideoElement",[d]);a.videoObj.length&&(a._c7=f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'),a._c7.find(".rsPreloader").after(a.videoObj),b=b.hasClass("rsVideoContainer")?
b:b.find(".rsVideoContainer"),a._c7.css({width:b.width(),height:b.height()}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv",function(b){a.stopVideo();b.preventDefault();b.stopPropagation();return!1}),b.append(a._c7),a.isIPAD&&b.addClass("rsIOSVideo"),a._f7(!1),setTimeout(function(){a._c7.addClass("rsVideoActive")},10),a.ev.trigger("rsVideoPlay"),a._b7=!0);return!0}return!1},stopVideo:function(){var a=this;return a._b7?(a.isIPAD&&a.slider.find(".rsCloseVideoBtn").remove(),a._f7(!0),setTimeout(function(){a.ev.trigger("rsOnDestroyVideoElement",
[a.videoObj]);var d=a._c7.find("iframe");if(d.length)try{d.attr("src","")}catch(b){}a._c7.remove();a._c7=null},16),a.ev.trigger("rsVideoStop"),a._b7=!1,!0):!1},_f7:function(a,d){var b=[],c=this.st.video;c.autoHideArrows&&(this._c2&&(b.push(this._c2,this._d2),this._e2=!a),this._v5&&b.push(this._v5));c.autoHideControlNav&&this._k5&&b.push(this._k5);c.autoHideBlocks&&this._d7.animBlocks&&b.push(this._d7.animBlocks);c.autoHideCaption&&this.globalCaption&&b.push(this.globalCaption);this.slider[a?"removeClass":
"addClass"]("rsVideoPlaying");if(b.length)for(c=0;c<b.length;c++)a?b[c].removeClass("rsHidden"):b[c].addClass("rsHidden")}});f.rsModules.video=f.rsProto._z6})(jQuery);
// jquery.rs.visible-nearby v1.0.2
(function(d){d.rsProto._g7=function(){var a=this;a.st.visibleNearby&&a.st.visibleNearby.enabled&&(a._h7={enabled:!0,centerArea:0.6,center:!0,breakpoint:0,breakpointCenterArea:0.8,hiddenOverflow:!0,navigateByCenterClick:!1},a.st.visibleNearby=d.extend({},a._h7,a.st.visibleNearby),a.ev.one("rsAfterPropsSetup",function(){a._i7=a._e1.css("overflow","visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();a.st.visibleNearby.hiddenOverflow||a._i7.css("overflow","visible");a._o1=a.st.controlsInside?
a._i7:a.slider}),a.ev.on("rsAfterSizePropSet",function(){var b,c=a.st.visibleNearby;b=c.breakpoint&&a.width<c.breakpoint?c.breakpointCenterArea:c.centerArea;a._h?(a._b4*=b,a._i7.css({height:a._c4,width:a._b4/b}),a._d=a._b4*(1-b)/2/b):(a._c4*=b,a._i7.css({height:a._c4/b,width:a._b4}),a._d=a._c4*(1-b)/2/b);c.navigateByCenterClick||(a._q=a._h?a._b4:a._c4);c.center&&a._e1.css("margin-"+(a._h?"left":"top"),a._d)}))};d.rsModules.visibleNearby=d.rsProto._g7})(jQuery);

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)',62,382,'||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|orignalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'),0,{}))
/* This little package sets up a router */

window["router"] = {
		options: {
			hashFormat: '#',
			pruneFilename: true,
			interval: true,
			indexFilename: 'index.html'
		},
		hashMatch: null,
		interval: null,
		paths: {},
		current_hash: '666',
		start: function(options) {
		
			// incorporate parameters into objet configuration
			for (var o in options) {
				this.options[o] = options[o];
			}
			
			// set up hash pattern
			this.hashMatch = new RegExp('^'+this.options.hashFormat);

			// set base url
			if (this.options.pruneFilename) {
				this.base_url = window.location.pathname.replace(/[^\/]*$/, "");
			}

			// if we're going to use the automatic hash check instead of binding click handlers,
			// do that!
			if (this.options.interval && !this.interval) {
				this.interval = setInterval(function() { router.checkURL(); },200);
			}
			
			// fire up the router by checking current URL
			this.checkURL();
		},
		route: function(hash) {
			for (path in this.paths) {
				var pattern = path.replace(/\//g,"\\/");
				pattern = new RegExp('^'+pattern+'$','i');
				var matches = hash.match(pattern)
				if (matches!=null) {
					matches.shift();
					var func = this.paths[path];
					func.call(null,matches);					
					return true;
				}
			}
			
			if (this.paths['404']) {
				var func = this.paths['404'];
				func.call(null,hash);
				return true;
			}			
		},
		checkURL: function() {
			var hash = window.location.hash;
			var href = window.location.pathname;
			var atRoot = true;


			if (this.base_url!=href) {
				atRoot = false;		
				if (hash=='' || !hash) {
					hash = href.replace(this.base_url,'');
					if (hash[0]!='/') {
						hash = '/'+hash;
					}
					// make sure index.html is the same as /
					if (hash == '/'+this.options.indexFilename) {
						hash = '';
						atRoot = true;
					}

				}
			}
			
			
			if (atRoot && !hash) { hash ='/'; }

			// normalize hash so it matches url strings
			if (hash.match(this.hashMatch)) {
				hash = hash.substr(this.options.hashFormat.length,hash.length);
			}

			if (hash!=this.current_hash) {
			
				// if user is at a URL that is not the root url
				// but has navigated to a hash on that sub-url within the app,
				// make it look like they're actually at the root of the app.
				// example: mydomain.com/permalink.html#home -> mydomain.com/#home
				if (!atRoot && hash!='') {
					if (history.replaceState) {
						history.replaceState(null,null,this.base_url+hash.substr(1,hash.length));
					} else {
						window.location = this.base_url+this.options.hashFormat+hash;
					}
				}

				this.current_hash = hash;

				this.route(hash);				
			}	
		},	
		// accepts either a path and a callback
		// or an array of paths mapped to callbacks
		add: function(path,callback) {
			if (typeof path == 'object') {
				for (var p in path) {
					this.paths[p] = path[p];
				}
			} else {
				this.paths[path]=callback;
			}
		},
		goto: function(path) {
			if (path.match(this.hashMatch)) {
				path = path.substr(this.options.hashFormat.length,path.length);
			}
			if (path.match(/\:\/\//)) {
				return false;
			}
			// make sure paths are formatted like absolute links
			if (path[0] != '/') {
				path = '/' + path;
			}
			if (this.route(path)) {
				if (history.pushState) {
					if (this.base_url[this.base_url.length-1]=='/') {
						url = this.base_url + path.substr(1,path.legth);
					} else {
						url = this.base_url + path;
					}

		
					// reset hash so we don't trigger a change.
					this.current_hash=path;
					
					// push this url onto the history stack.
					history.pushState(null,null,url);

				} else {
					// no pushstate,
					// so translate this into a hash url instead.
					url = this.base_url+this.options.hashFormat+path;
					
					// setting the location will trigger the router
					window.location = url;
				}
				return true;
			} else {
				return false;
			}
		}
};
/*! WOW - v0.1.9 - 2014-05-10
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),b=this.WeakMap||(b=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),this.WOW=function(){function d(a){null==a&&(a={}),this.scrollCallback=c(this.scrollCallback,this),this.scrollHandler=c(this.scrollHandler,this),this.start=c(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new b}return d.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},d.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},d.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},d.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},d.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},d.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},d.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),d.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},d.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},d.prototype.vendors=["moz","webkit"],d.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},d.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},d.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},d.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},d.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},d.prototype.scrollHandler=function(){return this.scrolled=!0},d.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},d.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},d.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},d.prototype.util=function(){return this._util||(this._util=new a)},d.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},d}()}).call(this);
var images = ['eureka_belt_system/bg_eureka_belt.jpg','eureka_belt_system/gallery/20140722_161444.jpg','eureka_belt_system/gallery/20140722_161523.jpg','eureka_belt_system/gallery/20140904_155547.jpg','eureka_belt_system/gallery/20140904_155728.jpg','eureka_belt_system/gallery/20140904_155756.jpg','eureka_belt_system/gallery/20140904_155808.jpg','eureka_belt_system/gallery/701.jpg','eureka_belt_system/gallery/707.jpg','eureka_belt_system/gallery/708.jpg','eureka_belt_system/gallery/709.jpg','eureka_belt_system/gallery/710.jpg','eureka_belt_system/gallery/711.jpg','eureka_belt_system/gallery/712.jpg','eureka_belt_system/gallery/713.jpg','eureka_belt_system/gallery/716.jpg','eureka_belt_system/gallery/717.jpg','eureka_belt_system/gallery/724.jpg','eureka_belt_system/gallery/725.jpg','eureka_belt_system/gallery/727.jpg','folding_arm_awning/family_basic/family02gr.jpg','folding_arm_awning/family_basic/family07gr.jpg','folding_arm_awning/family_basic/family08gr.jpg','folding_arm_awning/family_basic/family09gr.jpg','folding_arm_awning/family_basic/family10gr.jpg','folding_arm_awning/family_basic/gallery/20131210_153116.jpg','folding_arm_awning/family_basic/gallery/20131210_153125.jpg','folding_arm_awning/family_basic/gallery/20131231_131121.jpg','folding_arm_awning/family_basic/gallery/20131231_131150.jpg','folding_arm_awning/family_basic/gallery/20140205_134344.jpg','folding_arm_awning/family_basic/gallery/20140205_154947.jpg','folding_arm_awning/family_basic/gallery/20140205_155047.jpg','folding_arm_awning/family_basic/gallery/20140212_101727.jpg','folding_arm_awning/family_basic/gallery/20140212_101742.jpg','folding_arm_awning/family_basic/gallery/20140212_101835.jpg','folding_arm_awning/family_basic/gallery/816.jpg','folding_arm_awning/family_basic/gallery/820.jpg','folding_arm_awning/family_basic/gallery/824.jpg','folding_arm_awning/family_basic/gallery/830.jpg','folding_arm_awning/family_basic/gallery/img_0664.jpg','folding_arm_awning/family_basic/gallery/img_0665.jpg','folding_arm_awning/family_basic/gallery/img_0667.jpg','folding_arm_awning/family_basic/gallery/img_0668.jpg','folding_arm_awning/family_basic/gallery/img_0669.jpg','folding_arm_awning/family_basic/gallery/img_0670.jpg','folding_arm_awning/family_basic/gallery/img_0671.jpg','folding_arm_awning/family_basic/technical_features1.jpg','folding_arm_awning/family_design/bg_family_design.jpg','folding_arm_awning/family_design/familydesign01gr.jpg','folding_arm_awning/family_design/familydesign05gr.jpg','folding_arm_awning/family_design/familydesign06gr.jpg','folding_arm_awning/family_design/familydesign07gr.jpg','folding_arm_awning/family_design/familydesign08gr.jpg','folding_arm_awning/family_design/familydesign09gr.jpg','folding_arm_awning/family_design/gallery/20121115_182247(0).jpg','folding_arm_awning/family_design/gallery/20131010_142545.jpg','folding_arm_awning/family_design/gallery/20131118_171558.jpg','folding_arm_awning/family_design/gallery/20131217_190624.jpg','folding_arm_awning/family_design/gallery/20131217_190635.jpg','folding_arm_awning/family_design/gallery/20131217_190643.jpg','folding_arm_awning/family_design/gallery/20131217_190656.jpg','folding_arm_awning/family_design/gallery/20131217_190802.jpg','folding_arm_awning/family_design/gallery/20141002_114028.jpg','folding_arm_awning/family_design/gallery/20141002_114043.jpg','folding_arm_awning/family_design/gallery/20141002_114045.jpg','folding_arm_awning/family_design/gallery/20141002_114102.jpg','folding_arm_awning/family_design/gallery/20141002_114140.jpg','folding_arm_awning/family_design/gallery/20141002_114157.jpg','folding_arm_awning/family_design/gallery/20141002_115232.jpg','folding_arm_awning/family_design/gallery/20141002_115515.jpg','folding_arm_awning/family_design/gallery/20141016_095006.jpg','folding_arm_awning/family_design/gallery/20141016_102136.jpg','folding_arm_awning/family_design/gallery/20141016_102145.jpg','folding_arm_awning/family_kompakt/bg_family_kompakt.jpg','folding_arm_awning/family_kompakt/familykompakt01gr.jpg','folding_arm_awning/family_kompakt/familykompakt04gr.jpg','folding_arm_awning/family_kompakt/familykompakt05gr.jpg','folding_arm_awning/family_kompakt/familykompakt06gr.jpg','folding_arm_awning/family_kompakt/familykompakt07gr.jpg','folding_arm_awning/family_kompakt/familykompakt08gr.jpg','folding_arm_awning/family_kompakt/gallery/20121207_125853.jpg','folding_arm_awning/family_kompakt/gallery/20121207_125858.jpg','folding_arm_awning/family_kompakt/gallery/20121207_125907.jpg','folding_arm_awning/family_kompakt/gallery/20121207_125908.jpg','folding_arm_awning/family_kompakt/gallery/20121207_125933.jpg','folding_arm_awning/family_kompakt/gallery/20121207_130146.jpg','folding_arm_awning/family_kompakt/gallery/20121207_130153.jpg','folding_arm_awning/family_kompakt/gallery/20130802_131629.jpg','folding_arm_awning/family_kompakt/gallery/20130802_133311.jpg','folding_arm_awning/family_kompakt/gallery/20131018_094539.jpg','folding_arm_awning/family_kompakt/gallery/20131018_094648.jpg','folding_arm_awning/family_kompakt/gallery/20131018_095109.jpg','folding_arm_awning/family_kompakt/gallery/20131018_095125.jpg','folding_arm_awning/family_kompakt/gallery/20131018_095207.jpg','folding_arm_awning/family_kompakt/gallery/20131018_095310.jpg','folding_arm_awning/family_kompakt/gallery/20131018_095335.jpg','folding_arm_awning/family_kompakt/gallery/20131022_162221.jpg','folding_arm_awning/family_kompakt/gallery/20131022_162245.jpg','folding_arm_awning/family_kompakt/gallery/20131022_162331.jpg','folding_arm_awning/family_kompakt/gallery/20131022_162400.jpg','folding_arm_awning/family_kompakt/gallery/20131030_142704.jpg','folding_arm_awning/family_kompakt/gallery/20131030_152257.jpg','folding_arm_awning/family_kompakt/gallery/20131030_152333.jpg','folding_arm_awning/family_kompakt/gallery/20131030_152423.jpg','folding_arm_awning/family_kompakt/gallery/20131030_152458.jpg','folding_arm_awning/family_kompakt/gallery/20131030_152507.jpg','folding_arm_awning/family_kompakt/gallery/20131031_115814.jpg','folding_arm_awning/family_kompakt/gallery/20131031_115953.jpg','folding_arm_awning/family_kompakt/gallery/20131031_120003.jpg','folding_arm_awning/family_kompakt/gallery/20131106_130302.jpg','folding_arm_awning/family_kompakt/gallery/20131106_130616.jpg','folding_arm_awning/family_kompakt/gallery/20131106_161117.jpg','folding_arm_awning/family_kompakt/gallery/20131106_161136.jpg','folding_arm_awning/family_kompakt/gallery/20131106_161154.jpg','folding_arm_awning/family_kompakt/gallery/20131106_161214.jpg','folding_arm_awning/family_kompakt/gallery/20131106_161227.jpg','folding_arm_awning/family_kompakt/gallery/20131106_161240.jpg','folding_arm_awning/family_kompakt/gallery/20131118_171539.jpg','folding_arm_awning/family_kompakt/gallery/20131118_171558.jpg','folding_arm_awning/family_kompakt/gallery/20131119_165802.jpg','folding_arm_awning/family_kompakt/gallery/20131119_165845.jpg','folding_arm_awning/family_kompakt/gallery/20131120_174834.jpg','folding_arm_awning/family_kompakt/gallery/20131120_174847.jpg','folding_arm_awning/family_kompakt/gallery/20131120_174905.jpg','folding_arm_awning/family_kompakt/gallery/20131120_174919.jpg','folding_arm_awning/family_kompakt/gallery/20131121_130351.jpg','folding_arm_awning/family_kompakt/gallery/20131121_130358.jpg','folding_arm_awning/family_kompakt/gallery/20131121_130508.jpg','folding_arm_awning/family_kompakt/gallery/20131125_123950.jpg','folding_arm_awning/family_kompakt/gallery/20131125_123958.jpg','folding_arm_awning/family_kompakt/gallery/20131125_124311.jpg','folding_arm_awning/family_kompakt/gallery/20131125_124338.jpg','folding_arm_awning/family_kompakt/gallery/20131125_124613.jpg','folding_arm_awning/family_kompakt/gallery/20131125_124614.jpg','folding_arm_awning/family_kompakt/gallery/20131125_124700.jpg','folding_arm_awning/family_kompakt/gallery/20131203_135309.jpg','folding_arm_awning/family_kompakt/gallery/20131203_135614.jpg','folding_arm_awning/family_kompakt/gallery/20131203_135619.jpg','folding_arm_awning/family_kompakt/gallery/20131203_135626.jpg','folding_arm_awning/family_kompakt/gallery/20131213_170948.jpg','folding_arm_awning/family_kompakt/gallery/20131213_174034.jpg','folding_arm_awning/family_kompakt/gallery/20131230_101041.jpg','folding_arm_awning/family_kompakt/gallery/20140206_191947.jpg','folding_arm_awning/family_kompakt/gallery/20140206_192127.jpg','folding_arm_awning/family_kompakt/gallery/20140206_192154.jpg','folding_arm_awning/family_kompakt/gallery/20140206_192248.jpg','folding_arm_awning/family_kompakt/gallery/20140213_114308.jpg','folding_arm_awning/family_kompakt/gallery/20140213_114323.jpg','folding_arm_awning/family_kompakt/gallery/20140213_122233(0).jpg','folding_arm_awning/family_kompakt/gallery/20140213_122233.jpg','folding_arm_awning/family_kompakt/gallery/20140213_130315.jpg','folding_arm_awning/family_kompakt/gallery/20140217_115303.jpg','folding_arm_awning/family_kompakt/gallery/20140217_115320.jpg','folding_arm_awning/family_kompakt/gallery/20140217_115355.jpg','folding_arm_awning/family_kompakt/gallery/20140217_115419.jpg','folding_arm_awning/family_kompakt/gallery/20140217_115448.jpg','folding_arm_awning/family_kompakt/gallery/20140218_163601.jpg','folding_arm_awning/family_kompakt/gallery/20140221_164521.jpg','folding_arm_awning/family_kompakt/gallery/20140918_150747.jpg','folding_arm_awning/family_kompakt/gallery/20140918_150755.jpg','folding_arm_awning/family_kompakt/gallery/20140918_150810.jpg','folding_arm_awning/family_kompakt/gallery/20140918_150813.jpg','folding_arm_awning/family_kompakt/gallery/20140918_150827.jpg','folding_arm_awning/family_kompakt/gallery/20140918_150955.jpg','folding_arm_awning/family_kompakt/gallery/20140918_151123.jpg','folding_arm_awning/family_kompakt/gallery/20140918_151143.jpg','folding_arm_awning/family_kompakt/gallery/20140918_151150.jpg','folding_arm_awning/family_kompakt/gallery/20140922_103915.jpg','folding_arm_awning/family_kompakt/gallery/20140925_134344.jpg','folding_arm_awning/family_kompakt/gallery/20140925_134401.jpg','folding_arm_awning/family_kompakt/gallery/20140925_134446.jpg','folding_arm_awning/family_kompakt/gallery/20140925_134453.jpg','folding_arm_awning/family_kompakt/gallery/20140925_134512.jpg','folding_arm_awning/family_kompakt/gallery/20141029_111848.jpg','folding_arm_awning/family_kompakt/gallery/20141029_111903.jpg','folding_arm_awning/family_kompakt/gallery/20141029_112009.jpg','folding_arm_awning/family_kompakt/gallery/20141029_124101.jpg','folding_arm_awning/family_kompakt/gallery/28102009505.jpg','folding_arm_awning/family_kompakt/gallery/28102009513.jpg','folding_arm_awning/family_kompakt/gallery/img_0860.jpg','folding_arm_awning/family_kompakt/gallery/img_0864.jpg','folding_arm_awning/family_kompakt/gallery/img_0867.jpg','folding_arm_awning/family_kompakt/gallery/img_0868.jpg','folding_arm_awning/family_kompakt/gallery/img_0871.jpg','folding_arm_awning/family_kompakt/gallery/photo10.jpg','folding_arm_awning/family_kompakt/gallery/photo12.jpg','folding_arm_awning/family_kompakt/gallery/photo13.jpg','folding_arm_awning/family_kompakt/gallery/photo6.jpg','folding_arm_awning/family_kompakt/gallery/photo7.jpg','folding_arm_awning/millennium/bg_millennium.jpg','folding_arm_awning/millennium/gallery/20121214_172802.jpg','folding_arm_awning/millennium/gallery/20121214_172818.jpg','folding_arm_awning/millennium/gallery/20121214_172830.jpg','folding_arm_awning/millennium/gallery/20121214_172958.jpg','folding_arm_awning/millennium/gallery/20121214_173002.jpg','folding_arm_awning/millennium/gallery/20121214_173005.jpg','folding_arm_awning/millennium/gallery/20121214_173219.jpg','folding_arm_awning/millennium/gallery/20121214_173328.jpg','folding_arm_awning/millennium/gallery/20130719_114042.jpg','folding_arm_awning/millennium/gallery/20130719_114149.jpg','folding_arm_awning/millennium/gallery/20131206_091619.jpg','folding_arm_awning/millennium/gallery/20131206_091901.jpg','folding_arm_awning/millennium/gallery/20131206_091940.jpg','folding_arm_awning/millennium/gallery/20131206_092026.jpg','folding_arm_awning/millennium/gallery/20131206_092839.jpg','folding_arm_awning/millennium/gallery/20131210_094259.jpg','folding_arm_awning/millennium/gallery/20131210_094333.jpg','folding_arm_awning/millennium/gallery/20131210_094501.jpg','folding_arm_awning/millennium/gallery/20131213_133204.jpg','folding_arm_awning/millennium/gallery/20131213_133207.jpg','folding_arm_awning/millennium/gallery/20131213_134053.jpg','folding_arm_awning/millennium/gallery/20131213_134105.jpg','folding_arm_awning/millennium/gallery/20131213_134113.jpg','folding_arm_awning/millennium/gallery/20131213_134131.jpg','folding_arm_awning/millennium/gallery/20131213_134206.jpg','folding_arm_awning/millennium/gallery/20131213_141240.jpg','folding_arm_awning/millennium/gallery/20131213_141645.jpg','folding_arm_awning/millennium/millennium01gr.jpg','folding_arm_awning/millennium/millennium04gr.jpg','folding_arm_awning/millennium/millennium05gr.jpg','folding_arm_awning/millennium/millennium06gr.jpg','folding_arm_awning/millennium/millennium07gr.jpg','folding_arm_awning/millennium/millennium08gr.jpg','folding_arm_awning/millennium/millennium09gr.jpg','folding_arm_awning/titan/bg_titan.jpg','folding_arm_awning/titan/gallery/1383543917283.jpg','folding_arm_awning/titan/gallery/1383543925346.jpg','folding_arm_awning/titan/gallery/1383543931815.jpg','folding_arm_awning/titan/gallery/1384290239216.jpg','folding_arm_awning/titan/gallery/1386921193547.jpg','folding_arm_awning/titan/gallery/1386921196957.jpg','folding_arm_awning/titan/gallery/20121122_125852.jpg','folding_arm_awning/titan/gallery/20121122_125901.jpg','folding_arm_awning/titan/gallery/20121122_125916.jpg','folding_arm_awning/titan/gallery/20121122_125949.jpg','folding_arm_awning/titan/gallery/20121122_130004.jpg','folding_arm_awning/titan/gallery/20121212_123533.jpg','folding_arm_awning/titan/gallery/20121212_123551.jpg','folding_arm_awning/titan/gallery/20121212_123603.jpg','folding_arm_awning/titan/gallery/20121212_130043.jpg','folding_arm_awning/titan/gallery/20121212_130051.jpg','folding_arm_awning/titan/gallery/20121212_130108.jpg','folding_arm_awning/titan/gallery/20121212_130124.jpg','folding_arm_awning/titan/gallery/20121212_130134.jpg','folding_arm_awning/titan/gallery/20121212_130219.jpg','folding_arm_awning/titan/gallery/20121212_130327.jpg','folding_arm_awning/titan/gallery/20121212_130432.jpg','folding_arm_awning/titan/gallery/20121212_130434.jpg','folding_arm_awning/titan/gallery/20121212_130441.jpg','folding_arm_awning/titan/gallery/20121212_130451.jpg','folding_arm_awning/titan/gallery/20121212_130459.jpg','folding_arm_awning/titan/gallery/20130225_123021.jpg','folding_arm_awning/titan/gallery/20130225_123031.jpg','folding_arm_awning/titan/gallery/20130225_123048.jpg','folding_arm_awning/titan/gallery/20130225_123155.jpg','folding_arm_awning/titan/gallery/20130225_123508.jpg','folding_arm_awning/titan/gallery/20130225_123514.jpg','folding_arm_awning/titan/gallery/20130606_150729.jpg','folding_arm_awning/titan/gallery/20130903_112416.jpg','folding_arm_awning/titan/gallery/20130903_112436.jpg','folding_arm_awning/titan/gallery/20130903_112439.jpg','folding_arm_awning/titan/gallery/20130903_112549.jpg','folding_arm_awning/titan/gallery/20130903_112554.jpg','folding_arm_awning/titan/gallery/20130917_122129.jpg','folding_arm_awning/titan/gallery/20130917_122152.jpg','folding_arm_awning/titan/gallery/20130917_122207.jpg','folding_arm_awning/titan/gallery/20131104_155941.jpg','folding_arm_awning/titan/gallery/20131104_160158.jpg','folding_arm_awning/titan/gallery/20131129_130730.jpg','folding_arm_awning/titan/gallery/20131129_130739.jpg','folding_arm_awning/titan/gallery/20131129_130804.jpg','folding_arm_awning/titan/gallery/20131129_130814.jpg','folding_arm_awning/titan/gallery/20131129_130845.jpg','folding_arm_awning/titan/gallery/20131210_153116.jpg','folding_arm_awning/titan/gallery/20131210_153125.jpg','folding_arm_awning/titan/gallery/20131221_115331.jpg','folding_arm_awning/titan/gallery/20131221_115345.jpg','folding_arm_awning/titan/gallery/20131221_115413.jpg','folding_arm_awning/titan/gallery/20131231_131121.jpg','folding_arm_awning/titan/gallery/20131231_131128.jpg','folding_arm_awning/titan/gallery/20131231_131150.jpg','folding_arm_awning/titan/gallery/20140821_162855.jpg','folding_arm_awning/titan/gallery/20140821_162941.jpg','folding_arm_awning/titan/gallery/20140917_113254.jpg','folding_arm_awning/titan/gallery/20140917_113301.jpg','folding_arm_awning/titan/gallery/20140917_113322.jpg','folding_arm_awning/titan/gallery/20140917_113325.jpg','folding_arm_awning/titan/gallery/20140930_164621.jpg','folding_arm_awning/titan/gallery/20140930_164647.jpg','folding_arm_awning/titan/gallery/20140930_164704.jpg','folding_arm_awning/titan/gallery/20141016_170305.jpg','folding_arm_awning/titan/gallery/20141016_170643.jpg','folding_arm_awning/titan/gallery/20141020_152846.jpg','folding_arm_awning/titan/gallery/20141020_152856.jpg','folding_arm_awning/titan/gallery/20141020_154138.jpg','folding_arm_awning/titan/gallery/20141020_154145.jpg','folding_arm_awning/titan/gallery/20141020_154153.jpg','folding_arm_awning/titan/gallery/20141020_154254.jpg','folding_arm_awning/titan/gallery/20141020_154302.jpg','folding_arm_awning/titan/gallery/20141020_154309.jpg','folding_arm_awning/titan/gallery/img_2193.jpg','folding_arm_awning/titan/gallery/img_3445.jpg','folding_arm_awning/titan/gallery/img_4592.jpg','folding_arm_awning/titan/gallery/img_6240.jpg','folding_arm_awning/titan/gallery/img_7974.jpg','home_ment/slide/20121214_173002.jpg','home_ment/slide/20131213_133204.jpg','home_ment/slide/20140918_150810.jpg','home_ment/slide/28102009513.jpg','home_ment/slide/701.jpg','home_ment/slide/705.jpg','home_ment/slide/713.jpg','home_ment/slide/725.jpg','home_ment/slide/img_0835.jpg','home_ment/slide/img_0864.jpg','home_ment/slide/img_0868.jpg','home_ment/slide/suntech_pool_1.jpg','home_ment/slide/suntech_pool_2.jpg','home_ment/slide/suntech_radian_on_hangs.jpg','home_ment/slide/suntech_with_blinds.jpg','retractable_pergolas/gallery/1.jpg','retractable_pergolas/gallery/10.jpg','retractable_pergolas/gallery/11.jpg','retractable_pergolas/gallery/12.jpg','retractable_pergolas/gallery/121-suntech_novo.jpg','retractable_pergolas/gallery/125-suntech_novo.jpg','retractable_pergolas/gallery/126-suntech_novo.jpg','retractable_pergolas/gallery/13.jpg','retractable_pergolas/gallery/14.jpg','retractable_pergolas/gallery/15.jpg','retractable_pergolas/gallery/16.jpg','retractable_pergolas/gallery/17.jpg','retractable_pergolas/gallery/2.jpg','retractable_pergolas/gallery/20121108_082649.jpg','retractable_pergolas/gallery/20121108_082659.jpg','retractable_pergolas/gallery/20121108_185030.jpg','retractable_pergolas/gallery/20121109_204744.jpg','retractable_pergolas/gallery/20121109_204822.jpg','retractable_pergolas/gallery/20121109_204904.jpg','retractable_pergolas/gallery/20121109_211308.jpg','retractable_pergolas/gallery/20130124_200546.jpg','retractable_pergolas/gallery/20130124_200604.jpg','retractable_pergolas/gallery/20130124_200612.jpg','retractable_pergolas/gallery/20130124_200635.jpg','retractable_pergolas/gallery/20130712_140240.jpg','retractable_pergolas/gallery/20130712_140320.jpg','retractable_pergolas/gallery/20130717_101539.jpg','retractable_pergolas/gallery/20130717_101554.jpg','retractable_pergolas/gallery/20130717_101607.jpg','retractable_pergolas/gallery/20130717_101642.jpg','retractable_pergolas/gallery/20130717_101729.jpg','retractable_pergolas/gallery/20130717_101957.jpg','retractable_pergolas/gallery/20130723_160218.jpg','retractable_pergolas/gallery/20130723_162054.jpg','retractable_pergolas/gallery/20130727_182657.jpg','retractable_pergolas/gallery/20130727_182711.jpg','retractable_pergolas/gallery/20130727_182721.jpg','retractable_pergolas/gallery/20130904_113455.jpg','retractable_pergolas/gallery/20130904_113505.jpg','retractable_pergolas/gallery/20130909_150455.jpg','retractable_pergolas/gallery/20130909_151732.jpg','retractable_pergolas/gallery/20130909_151747.jpg','retractable_pergolas/gallery/20130909_154320.jpg','retractable_pergolas/gallery/20130909_154327.jpg','retractable_pergolas/gallery/20140114_153107.jpg','retractable_pergolas/gallery/20140114_155821.jpg','retractable_pergolas/gallery/20140114_155825.jpg','retractable_pergolas/gallery/20140114_155841.jpg','retractable_pergolas/gallery/20140114_155903.jpg','retractable_pergolas/gallery/20140114_155919.jpg','retractable_pergolas/gallery/20140114_160721.jpg','retractable_pergolas/gallery/20140114_160746.jpg','retractable_pergolas/gallery/20140114_160843.jpg','retractable_pergolas/gallery/20140114_160850.jpg','retractable_pergolas/gallery/3.jpg','retractable_pergolas/gallery/4.jpg','retractable_pergolas/gallery/5.jpg','retractable_pergolas/gallery/6.jpg','retractable_pergolas/gallery/7.jpg','retractable_pergolas/gallery/8.jpg','retractable_pergolas/gallery/9.jpg','retractable_pergolas/gallery/novo_1.jpg','retractable_pergolas/gallery/novo_2.jpg','retractable_pergolas/gallery/suntech_burger.jpg','retractable_pergolas/gallery/suntech_deck_1.jpg','retractable_pergolas/gallery/suntech_full_radian_1.jpg','retractable_pergolas/gallery/suntech_full_radian_2.jpg','retractable_pergolas/gallery/suntech_full_radian_3.jpg','retractable_pergolas/gallery/suntech_full_radian_4.jpg','retractable_pergolas/gallery/suntech_haci.jpg','retractable_pergolas/gallery/suntech_luna_200.jpg','retractable_pergolas/gallery/suntech_luna_full_2.jpg','retractable_pergolas/gallery/suntech_luna_full_3.jpg','retractable_pergolas/gallery/suntech_mcdonalds_1.jpg','retractable_pergolas/gallery/suntech_mcdonalds_2.jpg','retractable_pergolas/gallery/suntech_mcdonalds_3.jpg','retractable_pergolas/gallery/suntech_mcdonalds_4.jpg','retractable_pergolas/gallery/suntech_on_hangs_1.jpg','retractable_pergolas/gallery/suntech_on_hangs_2.jpg','retractable_pergolas/gallery/suntech_pool_1.jpg','retractable_pergolas/gallery/suntech_pool_2.jpg','retractable_pergolas/gallery/suntech_pool_3.jpg','retractable_pergolas/gallery/suntech_public_pool.jpg','retractable_pergolas/gallery/suntech_radian_on_hangs.jpg','retractable_pergolas/gallery/suntech_with_blinds.jpg','straight_drop_awning/antares_tenstion_system/bg.jpg','straight_drop_awning/antares_tenstion_system/gallery/1391496185067.jpg','straight_drop_awning/antares_tenstion_system/gallery/20131004_112010.jpg','straight_drop_awning/antares_tenstion_system/gallery/20140204_170532.jpg','straight_drop_awning/antares_tenstion_system/gallery/20140204_170701.jpg','straight_drop_awning/antares_tenstion_system/gallery/20140204_170710.jpg','straight_drop_awning/antares_tenstion_system/gallery/702.jpg','straight_drop_awning/antares_tenstion_system/gallery/703.jpg','straight_drop_awning/antares_tenstion_system/gallery/704.jpg','straight_drop_awning/antares_tenstion_system/gallery/705.jpg','straight_drop_awning/antares_tenstion_system/gallery/706.jpg','straight_drop_awning/antares_tenstion_system/gallery/714.jpg','straight_drop_awning/cord_and_reel/bg.jpg','straight_drop_awning/drop/bg.jpg','straight_drop_awning/drop/gallery/20130307_170521.jpg','straight_drop_awning/drop/gallery/20130307_185417.jpg','straight_drop_awning/drop/gallery/20130430_160716.jpg','straight_drop_awning/drop/gallery/20130522_122655.jpg','straight_drop_awning/drop/gallery/20130522_123937.jpg','straight_drop_awning/drop/gallery/20130812_162036.jpg','straight_drop_awning/drop/gallery/20140205_113436.jpg','straight_drop_awning/drop/gallery/20140217_184835.jpg','straight_drop_awning/drop/gallery/20140718_153533.jpg','straight_drop_awning/drop/gallery/20140718_153911.jpg','straight_drop_awning/drop/gallery/20140718_153943.jpg','straight_drop_awning/drop/gallery/20140718_154003.jpg','straight_drop_awning/drop/gallery/20140718_154025.jpg','straight_drop_awning/drop/gallery/20140718_154503.jpg','straight_drop_awning/drop/gallery/20140908_152334.jpg','straight_drop_awning/drop/gallery/20140908_152639.jpg','straight_drop_awning/drop/gallery/20140916_165527.jpg','straight_drop_awning/drop/gallery/20140916_165920.jpg','straight_drop_awning/drop/gallery/20141003_103842.jpg','straight_drop_awning/drop/gallery/20141003_103924.jpg','straight_drop_awning/drop/gallery/20141010_123120.jpg','straight_drop_awning/drop/gallery/20141016_121805.jpg','straight_drop_awning/drop/gallery/805.jpg','straight_drop_awning/drop/gallery/img_0499.jpg','straight_drop_awning/drop/gallery/img_0526.jpg','straight_drop_awning/drop/gallery/img_0528.jpg','straight_drop_awning/fixed_wire_guide_drop/bg.jpg','straight_drop_awning/verandah_straight_drop/bg.jpg','straight_drop_awning/verandah_straight_drop/gallery/20130522_122625.jpg','straight_drop_awning/verandah_straight_drop/gallery/20130522_122636.jpg','straight_drop_awning/verandah_straight_drop/gallery/20130813_193217.jpg','straight_drop_awning/verandah_straight_drop/gallery/20130813_193225.jpg','straight_drop_awning/verandah_straight_drop/gallery/20130813_193247.jpg','straight_drop_awning/verandah_straight_drop/gallery/20131206_174130.jpg','straight_drop_awning/verandah_straight_drop/gallery/20131206_174138.jpg','straight_drop_awning/verandah_straight_drop/gallery/20131212_144131.jpg','straight_drop_awning/verandah_straight_drop/gallery/20131212_144152.jpg','straight_drop_awning/verandah_straight_drop/gallery/img_0677.jpg','straight_drop_awning/verandah_straight_drop/gallery/img_0678.jpg','straight_drop_awning/verandah_straight_drop/gallery/img_0839.jpg','straight_drop_awning/verandah_straight_drop/gallery/img_0840.jpg','straight_drop_awning/verandah_straight_drop/gallery/img_0841.jpg','straight_drop_awning/verandah_straight_drop/gallery/img_0842.jpg','straight_drop_awning/verandah_straight_drop/gallery/img_0843.jpg','straight_drop_awning/verandah_straight_drop/gallery/img_0844.jpg','straight_drop_awning/verandah_straight_drop/gallery/img_0845.jpg','straight_drop_awning/verandah_straight_drop/gallery/prod_pvc.jpg','window_awnings/convertable_awnings/bg.jpg','window_awnings/convertable_awnings/gallery/20131025_164324.jpg','window_awnings/convertable_awnings/gallery/20131119_152225.jpg','window_awnings/convertable_awnings/gallery/20131119_152250.jpg','window_awnings/convertable_awnings/gallery/20131119_152402.jpg','window_awnings/convertable_awnings/gallery/20131203_201225.jpg','window_awnings/convertable_awnings/gallery/20131203_201348.jpg','window_awnings/convertable_awnings/gallery/20131203_201430.jpg','window_awnings/convertable_awnings/gallery/20131203_201436.jpg','window_awnings/convertable_awnings/gallery/img_0606.jpg','window_awnings/convertable_awnings/gallery/img_0609.jpg','window_awnings/convertable_awnings/gallery/img_0610.jpg','window_awnings/robusta_awnings/bg.jpg','window_awnings/robusta_awnings/gallery/20140116_114231.jpg','window_awnings/robusta_awnings/gallery/20140116_114248.jpg','window_awnings/robusta_awnings/gallery/20140116_185945.jpg','window_awnings/robusta_awnings/gallery/20140116_190018.jpg','window_awnings/robusta_awnings/gallery/20140116_190026.jpg','window_awnings/robusta_awnings/gallery/20140116_191106.jpg','window_awnings/robusta_awnings/gallery/20140116_192426.jpg','window_awnings/robusta_awnings/gallery/20140116_192503.jpg','window_awnings/robusta_awnings/gallery/20140116_192609.jpg','window_awnings/robusta_awnings/gallery/20140116_192630.jpg','window_awnings/robusta_awnings/gallery/20140116_192635.jpg','window_awnings/robusta_awnings/gallery/20140116_192648.jpg','window_awnings/robusta_awnings/gallery/20140211_181946.jpg','window_awnings/robusta_awnings/gallery/20140211_182017.jpg','window_awnings/robusta_awnings/gallery/20140211_182309.jpg','window_awnings/robusta_awnings/gallery/20140212_112349.jpg','window_awnings/robusta_awnings/gallery/20140212_112414.jpg','window_awnings/robusta_awnings/gallery/20140212_112623.jpg','window_awnings/robusta_awnings/gallery/827.jpg','window_awnings/system_2000/bg.jpg','window_awnings/system_2000/gallery/20130430_094007.jpg','window_awnings/system_2000/gallery/20131108_130510.jpg','window_awnings/system_2000/gallery/20131108_130645.jpg','window_awnings/system_2000/gallery/20131108_130716.jpg','window_awnings/system_2000/gallery/20131205_141724.jpg','window_awnings/system_2000/gallery/20140911_131654.jpg','window_awnings/system_2000/gallery/20140911_131730.jpg','window_awnings/system_2000/gallery/20140911_131953.jpg','window_awnings/system_2000/gallery/awning4.jpg','window_awnings/system_2000_lock_arm/bg_system_2000_lock_arm.jpg','window_awnings/system_2000_lock_arm/gallery/20141009_154326.jpg','window_awnings/system_2000_lock_arm/gallery/20141009_154442.jpg','window_awnings/system_2000_lock_arm/gallery/20141009_154504.jpg','window_awnings/system_2000_lock_arm/gallery/20141009_154509.jpg','window_awnings/system_2000_lock_arm/gallery/20141009_154528.jpg','window_awnings/system_2000_lock_arm/gallery/20141009_154539.jpg','window_awnings/system_2000_lock_arm/gallery/20141009_154709.jpg','window_awnings/system_2000_lock_arm/gallery/img_0834.jpg','window_awnings/system_2000_lock_arm/gallery/img_0835.jpg']; // jshint ignore:line
/* jshint devel:true */
/* global router:false */

(function() {
  'use strict';

  router.add('/my_path',function() { 
		console.log('test');
	});
	router.start();
	
  var data = {
    sections: [
    {
      id: 'eureka_belt_system',
      name: 'Eureka Belt System',
      icon: 'images/awnings-412/eureka_belt_system/bg_eureka_belt.jpg',
      bgimg: 'images/awnings-1620/eureka_belt_system/bg_eureka_belt.jpg',
      products: [
        {
          id: 'eureka_belt_system',
          name: 'Eureka Belt System',
          description: 'Large Patios or Terraces... We\'ve got you covered.',
          icon: 'images/awnings-412/eureka_belt_system/bg_eureka_belt.jpg'
        }
      ]
    },
    {
      id: 'folding_arm_awning',
      name: 'Folding arm awning',
      icon: 'images/awnings-412/folding_arm_awning/family_design/bg_family_design.jpg',
      bgimg: 'images/awnings-1620/folding_arm_awning/bg.jpg',
      products: [
        {
          id: 'family_basic',
          name: 'Family basic',
          description: 'Best-selling awning without a cassette.',
          icon: 'images/awnings-412/folding_arm_awning/family_basic/gallery/820.jpg'
        },
        {
          id: 'family_design',
          name: 'Family design',
          description: 'Mid-range awning, offering a cassette and the option of an electric motor, all at a very good price.',
          icon: 'images/awnings-412/folding_arm_awning/family_design/bg_family_design.jpg'
        },
        {
          id: 'family_kompakt',
          name: 'Family kompakt',
          description: 'Top of the range, ultra- modern heavy duty awning, ideal for residential and commercial use.',
          icon: 'images/awnings-412/folding_arm_awning/family_kompakt/gallery/img_0864.jpg'
        },
        {
          id: 'millennium',
          name: 'Millennium',
          description: 'The strongest of all our awnings.',
          icon: 'images/awnings-412/folding_arm_awning/millennium/gallery/20121214_173219.jpg'
        },
        {
          id: 'titan',
          name: 'Titan',
          description: 'Great value economy model at a cracking price.',
          icon: 'images/awnings-412/folding_arm_awning/titan/gallery/20131231_131121.jpg'
        }
      ]
    },
    {
      id: 'retractable_pergolas',
      name: 'Retractable Pergolas',
      icon: 'images/awnings-412/retractable_pergolas/gallery/suntech_full_radian_2.jpg',
      bgimg: 'images/awnings-1620/retractable_pergolas/bg.jpg',
      products: [
        {
          id: 'retractable_pergolas',
          name: 'Retractable Pergolas',
          description: 'THE NEW GENERATION OF RETRACTABLE PERGOLAS AND ROOF SYSTEMS.',
          icon: 'images/awnings-412/retractable_pergolas/gallery/suntech_full_radian_2.jpg'
        }
      ]
    },
    {
      id: 'window_awnings',
      name: 'Window Awnings',
      icon: 'images/awnings-412/window_awnings/convertable_awnings/bg.jpg',
      bgimg: 'images/awnings-1620/window_awnings/bg.jpg',
      products: [
        {
          id: 'convertable_awnings',
          name: 'Convertable Awnings',
          description: 'Is traditional Australian pivot arm awning ideally suited to match with traditional houses such as Federation style. ',
          icon: 'images/awnings-412/window_awnings/convertable_awnings/bg.jpg'
        },
        {
          id: 'robusta_awnings',
          name: 'Robusta awning',
          description: 'With a durable roller tube and sturdy drop arms, Robusta is a solid window awning especially suited for larger windows.',
          icon: 'images/awnings-412/window_awnings/robusta_awnings/gallery/827.jpg'
        },
        {
          id: 'system_2000',
          name: 'System 2000 pivot Awnings',
          description: 'are very adaptable systems that can be designed to suit a wide range of needs. ',
          icon: 'images/awnings-412/window_awnings/system_2000/gallery/20140911_131730.jpg'
        },
        {
          id: 'system_2000_lock_arm',
          name: 'System 2000 lock arm awning',
          description: 'A perfect choice for close fitting to windows on the ground floor or onto a balcony.',
          icon: 'images/awnings-412/window_awnings/system_2000_lock_arm/gallery/img_0834.jpg'
        }
      ]
    },
    {
      id: 'straight_drop_awning',
      name: 'Straight Drop Awning',
      icon: 'images/awnings-412/straight_drop_awning/antares_tenstion_system/bg.jpg',
      bgimg: 'images/awnings-1620/straight_drop_awning/bg.jpg',
      products: [
        {
          id: 'antares_tenstion_system',
          name: 'Antares Tenstion System',
          description: 'retractable exterior vertical sunscreen systems from Europe.',
          icon: 'images/awnings-412/straight_drop_awning/antares_tenstion_system/gallery/714.jpg'
        },
        {
          id: 'cord_and_reel',
          name: 'Cord and Reel',
          description: 'Traditional Australian straight drop awning.',
          icon: 'images/awnings-412/straight_drop_awning/cord_and_reel/bg.jpg'
        },
        {
          id: 'drop',
          name: 'Drop Awnings',
          description: 'are very robust external gear operated sunscreen systems.',
          icon: 'images/awnings-412/straight_drop_awning/drop/gallery/805.jpg'
        },
        {
          id: 'fixed_wire_guide_drop',
          name: 'Fixed wire guide drop Awnings',
          description: 'A spring loaded cord operated blind excellent for upstairs windows, over glassed skylight or pergola.',
          icon: 'images/awnings-412/straight_drop_awning/fixed_wire_guide_drop/bg.jpg'
        },
        {
          id: 'verandah_straight_drop',
          name: 'Verandah Straight Drop Awnings',
          description: 'Is Old-style roll-up blind.',
          icon: 'images/awnings-412/straight_drop_awning/verandah_straight_drop/gallery/20131206_174130.jpg'
        }
      ]
    }
  ]};

  $('#main-menu').append(app.templates.main_menu(data)); // jshint ignore:line
  $('#main-content').append(app.templates.list_products(data)); // jshint ignore:line
  $('#awning-list').append(app.templates.awning_list(data)); // jshint ignore:line

  window['data'] = data;

  //'folding-arm-thumbnail-list'

  $('#thumbimg-eureka_belt_system').load(function() {
    // Handler for .load() called.
  });

  $(document).ready(function(){
    $('#awning-list').bxSlider({
      slideWidth: 300,
      minSlides: 3,
      maxSlides: 5,
      moveSlides: 2,
      slideMargin: 10,
      speed: 1000,
      //pause: 1000,
      auto: true,
      adaptiveHeight: true,
      nextText: '',
      prevText: ''
    });
  });
}());

function loadContent(id,cb) { // jshint ignore:line
  if($('#dialog-desc-button').length > 0) {
    $('#dialog-desc-button').remove();
    $('#dialog-gallery-button').remove();
  } // jshint ignore:line

  $('.modal-content').append(app.templates.dialog_toolbar({id: id})); // jshint ignore:line

  $('#modal-content-8').html(app.templates['product_' + id]()); // jshint ignore:line
  if(cb) cb(); // jshint ignore:line
} // jshint ignore:line

function loadDesc(id,cb) { // jshint ignore:line
  $('.modal-body').html(app.templates['product_' + id]()); // jshint ignore:line
  $('.modal-body').css('overflow-y', 'auto');
  if(cb) cb(); // jshint ignore:line
} // jshint ignore:line



function loadGallery(id,cb) { // jshint ignore:line
  var items = {images: []};
  images.forEach(function(i) {
    if(i.indexOf(id + '/gallery/') > -1){
      items.images.push({
        bigImg: 'images/awnings-1620/' + i,
        caption: 'captoin',
        icon: 'images/awnings-150/' + i
      });
    }
  });

  var htmlbody = app.templates.dialog_gallery(items);

  $('.modal-body').html(htmlbody); // jshint ignore:line

  var gallery = $('.modal-body');
  var height = gallery.outerHeight(true);
  var width = gallery.outerWidth(true);

  $('#product-gallery').royalSlider({
    fullscreen: {
      enabled: true,
      nativeFS: true
    },
    controlNavigation: 'thumbnails',
    autoScaleSlider: true,
    autoScaleSliderWidth: width,
    autoScaleSliderHeight: height,
    loop: false,
    imageScaleMode: 'fit-if-smaller',
    imageAlignCenter: true,
    navigateByClick: true,
    numImagesToPreload:2,
    arrowsNav:true,
    arrowsNavAutoHide: true,
    arrowsNavHideOnTouch: true,
    keyboardNavEnabled: true,
    fadeinLoadedSlide: true,
    globalCaption: false,
    globalCaptionInside: false,
    thumbs: {
      appendSpan: true,
      firstMargin: true,
      paddingBottom: 4
    }
  });

  $('.modal-body').css('overflow-y', 'none');

  if(cb) cb(); // jshint ignore:line
} // jshint ignore:line
