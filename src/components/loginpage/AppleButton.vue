<template>
    <button class="gsi-material-button shadow">
        <div class="gsi-material-button-content-wrapper">
        <div class="gsi-material-button-icon">
            <img src="../../assets/login/Apple_icon_white.png" class="mx-auto apple-icon" alt="Apple logo" />
        </div>
        <div>Sign in with Apple</div>
        </div>
    </button>
</template>
<script setup>

</script>
<style scoped>
.apple-icon {
    width: 23px;
    margin-left: 20px;
}
.gsi-material-button {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-appearance: none;
    background-color: #000000;
    background-image: none;
    border: none;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    font-family: 'Montserrat', arial, sans-serif;
    font-size: 16px;
    height: 45px;
    letter-spacing: 0.25px;
    outline: none;
    overflow: hidden;
    padding: 0 12px;
    position: relative;
    text-align: center;
    -webkit-transition: background-color .218s, border-color .218s, box-shadow .218s;
    transition: background-color .218s, border-color .218s, box-shadow .218s;
    vertical-align: middle;
    white-space: nowrap;
    width: 250px;
    min-width: min-content;
}
.max-width-400 {
    max-width: 400px;
}
.gsi-material-button .gsi-material-button-icon {
    height: 33px;
    margin-right: 12px;
    min-width: 20px;
    width: 40px;
}

.gsi-material-button .gsi-material-button-content-wrapper {
    -webkit-align-items: center;
    align-items: center;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;
}


</style>