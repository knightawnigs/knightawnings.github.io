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
