<template>
    <div class="container-fluid col-12">
        <!--<div class="">
            <img class="img-back" alt="" src="../../assets/security/security-1@2x.png" />
        </div>-->
        <div class="overall">
            <div class="col-12 d-none d-lg-block horaires horaires-text-size-lg">
                <b>0 % de bagages manquants</b>
            </div>
            <div class="col-12 d-none d-md-block d-lg-none horaires horaires-text-size-md">
                <b>0 % de bagages manquants</b>
            </div>
            <div class="col-12 d-none d-sm-block d-md-none horaires horaires-text-size-sm">
                <b>0 % de bagages manquants</b>
            </div>
            <div class="col-12 d-xs-block d-sm-none horaires horaires-text-size-xs neg-margin-bottom neg-margin-top">
                <b>0 % de bagages manquants</b>
            </div>
            <div class="col-12 d-none d-lg-block horaires prix-casier-text-size-lg">
                Avec nous vous pouvez vous sentir en sécurité!
            </div>
            <div class="col-12 d-none d-md-block d-lg-none horaires prix-casier-text-size-md">
                Avec nous vous pouvez vous sentir en sécurité!
            </div>
            <div class="col-12 d-none d-sm-block d-md-none horaires prix-casier-text-size-sm">
                Avec nous vous pouvez vous sentir en sécurité!
            </div>
            <div class="col-12 d-xs-block d-sm-none horaires prix-casier-text-size-xs neg-margin-bottom">
                Avec nous vous pouvez vous sentir en sécurité!
            </div>
            <div class="col-12 d-none d-lg-block horaires prix-casier-text-size-lg font-italic">
                <i> Assurée par Ageas Seguros</i>
                <img class="logo-tranquilidade" alt="" src="../../assets/security/logotipo-da-ageas-seguros.png" />
            </div>
            <div class="col-12 d-none d-md-block d-lg-none horaires prix-casier-text-size-md">
                <i> Assurée par Ageas Seguros</i>
                <img class="logo-tranquilidade" alt="" src="../../assets/security/logotipo-da-ageas-seguros.png" />
            </div>
            <div class="col-12 d-none d-sm-block d-md-none horaires prix-casier-text-size-sm">
                <i> Assurée par Ageas Seguros</i>
                <img class="logo-tranquilidade-larger" alt="" src="../../assets/security/logotipo-da-ageas-seguros.png" />
            </div>
            <div class="col-12 d-xs-block d-sm-none horaires prix-casier-text-size-xs">
                <i> Assurée par Ageas Seguros</i>
                <img class="logo-tranquilidade-larger" alt="" src="../../assets/security/logotipo-da-ageas-seguros.png" />
            </div>
        </div>
        <div class="overall-white">
            <div class="col-12 d-none d-lg-block horaires chez-nous-text-size-lg">
                Chez nous vos bagages sont assurés jusqu'à {{ seguro }} euros
            </div>
            <div class="col-12 d-none d-md-block d-lg-none horaires chez-nous-text-size-md">
                Chez nous vos bagages sont assurés jusqu'à {{ seguro }} euros
            </div>
            <div class="col-12 d-none d-sm-block d-md-none horaires chez-nous-text-size-sm">
                Chez nous vos bagages sont assurés jusqu'à {{ seguro }} euros
            </div>
            <div class="col-12 d-xs-block d-sm-none horaires chez-nous-text-size-xs neg-margin-top">
                Chez nous vos bagages sont assurés jusqu'à {{ seguro }} euros
            </div>
            <div class="col-12 d-none d-lg-block horaires chez-nous-text-size-lg locaux-margin-top-lg">
                Locaux Sous Vidéo Surveillance
            </div>
            <div class="col-12 d-none d-md-block d-lg-none horaires chez-nous-text-size-md locaux-margin-top-lg">
                Locaux Sous Vidéo Surveillance
            </div>
            <div class="col-12 d-none d-sm-block d-md-none horaires chez-nous-text-size-sm locaux-margin-top-lg">
                Locaux Sous Vidéo Surveillance
            </div>
            <div class="col-12 d-xs-block d-sm-none horaires chez-nous-text-size-xs locaux-margin-top-lg">
                Locaux Sous Vidéo Surveillance
            </div>
            <div class="col-12 d-none d-lg-block horaires chez-nous-text-size-lg locaux-margin-top-lg font-bold">
                7J/7 24h/24
            </div>
            <div class="col-12 d-none d-md-block d-lg-none horaires chez-nous-text-size-md locaux-margin-top-lg font-bold">
                7J/7 24h/24
            </div>
            <div class="col-12 d-none d-sm-block d-md-none horaires chez-nous-text-size-sm locaux-margin-top-lg font-bold">
                7J/7 24h/24
            </div>
            <div class="col-12 d-xs-block d-sm-none horaires chez-nous-text-size-xs locaux-margin-top-lg font-bold">
                7J/7 24h/24
            </div>
            <div class="col-12 mt-xs-1 mt-sm2 mt-md-3 mt-lg-5">
                <img class="camera-image" alt="" src="../../assets/security/camera-1@2x.png" />
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue'
let seguro = ref("300")
</script>
<style scoped>
.prix-casier-text-size-lg {
    font-size: 42px;
}

.prix-casier-text-size-md {
    font-size: 32px;
}

.prix-casier-text-size-sm {
    font-size: 22px;
}

.prix-casier-text-size-xs {
    font-size: 16px;
}

.overall {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
    background: #d7d7d7;

}

.overall-white {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
}
.chez-nous-text-size-lg {
    font-size: 54px;
}
.chez-nous-text-size-md {
    font-size: 44px;
}

.chez-nous-text-size-sm {
    font-size: 32px;
}

.chez-nous-text-size-xs {
    font-size: 22px;
}
.horaires-text-size-lg {
    font-size: 68px;
}

.horaires-text-size-md {
    font-size: 54px;
}

.horaires-text-size-sm {
    font-size: 36px;
}

.horaires-text-size-xs {
    font-size: 24px;
}

.horaires {
    margin-top: 70px;
    color: #000;
    font-family: Montserrat;
}

.logo-tranquilidade {
    width: 7%;
    height: 7%;
    object-fit: cover;
    margin-left: 30px;
}

.logo-tranquilidade-larger {
    width: 12%;
    height: 12%;
    object-fit: cover;
    margin-left: 30px;
}
.locaux-margin-top-lg {
    margin-top: 0px;
}
.camera-image {
    width: 50%;
    object-fit: cover;
}
.neg-margin-bottom {
    margin-bottom: -50px;
}
.neg-margin-top {
    margin-top: 50px;
}
</style>