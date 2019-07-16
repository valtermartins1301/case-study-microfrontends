#!/bin/bash

function performance(){
  REPORT_DIR=${2-"$HOME/report-performance"}
  REPORT_NAME=${1//[^[:alnum:]]/}

  mkdir -p $REPORT_DIR

  echo Performance start: "$1"
  lighthouse --chrome-flags="--headless --disable-gpu --no-sandbox" "$1" --output json --output html --output-path="$REPORT_DIR/$REPORT_NAME" --throttling.cpuSlowdownMultiplier=5 --throttling.throughputKbps=780 --emulated-form-factor=mobile --view
  echo "Performance end :) \n"
  echo "Report JSON saved in $REPORT_DIR/$REPORT_NAME.report.json"
  echo "Report HTML saved in $REPORT_DIR/$REPORT_NAME.report.html"
}

# Base
performance "https://thebestmotherfucking.website/" ./report

# Forms
performance "https://www.amazon.com/ap/register?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_newcust" ./report
performance "https://www.netflix.com/signup/regform" ./report
performance "https://www.facebook.com/" ./report
performance "https://www.spotify.com/br/signup/" ./report

# Sites
performance "https://www.google.com/" ./report
performance "https://www.youtube.com/" ./report
performance "https://www.netflix.com/br-en/" ./report
performance "https://www.itau.com.br/" ./report
performance "https://www.spotify.com/br/" ./report
performance "https://app.nubank.com.br/#/login" ./report
performance "https://nubank.com.br/" ./report

# Concorrentes
performance "https://www.itau.com.br/personnalite/credito/do-seu-jeito/credito-com-garantia/" ./report
performance "https://finanzero.com.br/" ./report
performance "https://www.bv.com.br/site/credito/credito-com-veiculo-garantia/" ./report