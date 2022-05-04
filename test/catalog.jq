#!/bin/sh
# takes an a file as argument
# two filters separated by a comma will have the same output piped to them
jq -r '.[] | 
"
<div class=\"product-section\">
    <h1 class=\"product-section-title\">\(.section)\"</h1>
    <img src=\"\(.img)\">
",
( .products[] | "
    <div class=\"product-cont\">
        <div class=\"title-price-cont\">
            <h2 class=\"product-title\">\(.title)</h2>
            <span class=\"product-price\">\(.price)</span>
        </div>
        <h3 class=\"product-subtitle\">\(.subtitle)</h3>
        <p>\(.text)</p>
    </div>
"),
( .img )?,
"</div>"
' $1
#

#"
#",
