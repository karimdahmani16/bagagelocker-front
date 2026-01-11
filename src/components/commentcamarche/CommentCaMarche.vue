<template>
<div id="commentcamarcheid" class="container overall-container">
    <div class="col-12 d-none d-xl-block comment-ca-marche-text comment-ca-marche-text-xl text-align-left">
        <b>Comment</b> ça marche ?
    </div>
    <div class="col-12 d-none d-md-block d-xl-none comment-ca-marche-text comment-ca-marche-text-md text-align-left">
        <b>Comment</b> ça marche ?
    </div>
    <div class="col-12 d-none d-sm-block d-md-none comment-ca-marche-text comment-ca-marche-text-sm text-align-center">
        <b>Comment</b> ça marche ?
    </div>
    <div class="col-12 d-xs-block d-sm-none comment-ca-marche-text comment-ca-marche-text-xs text-align-center">
        <b>Comment</b> ça marche ?
    </div>
    <div class="row comment-container">
        <ReserverElement class="mt-xs-0 mt-md-5 mr-xs-0 mr-md-5"/>
        <CodeAcces class="mr-xs-0 mr-md-5"/>
        <EntreposerBagages class="mr-xs-0 mr-md-5"/>
        <ProfiterElement class="mt-xs-0 mt-md-4 mr-xs-0 mr-md-5"/>
    </div>
</div>
</template>

<script setup>
import ReserverElement from './ReserverElement.vue'
import CodeAcces from './CodeAcces.vue'
import EntreposerBagages from './EntreposerBagages.vue'
import ProfiterElement from './ProfiterElement.vue'
</script>
<style scoped>
.comment-container {
    margin-top: 50px;
    justify-content: center;

}
.overall-container {

    text-align: start;
}
.margin-right-50 {
    margin-right: 50px;
}
.comment-ca-marche-text {
    overflow: hidden;
    color: #000;
    white-space: nowrap;
    font-family: Montserrat;
}
.text-align-left {
    text-align: left;
}
.text-align-center {
    text-align: center;
}
.comment-ca-marche-text-xl {
    font-size: 68px;
}
.comment-ca-marche-text-md {
    font-size: 54px;
}
.comment-ca-marche-text-sm {
    font-size: 36px;
}
.comment-ca-marche-text-xs {
    font-size: 24px;
}
.margin-top-profiter {
    margin-top: 30px;
}
.margin-top-reserver {
    margin-top: 30px;
}
</style>