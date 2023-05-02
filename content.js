const code = "

<script type="text/javascript">
var adfly_id = 24692891;
var adfly_advert = 'int';
var adfly_protocol = 'http';
var adfly_domain = 'ads.doc.sintco.cloudns.nz';
var exclude_domains = ['example.com'];
var frequency_cap = '5';
var frequency_delay = '5';
var init_delay = '3';
var popunder = true;
</script>
<script src="https://cdn.adf.ly/js/link-converter.js"></script>
<script src="https://cdn.adf.ly/js/entry.js"></script>

";

const head = document.head || document.getElementsByTagName("head")[0];
head.insertAdjacentHTML("beforeend", code);
