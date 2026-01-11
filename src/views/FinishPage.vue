<template>
    <div class="fullscreen-div">
        <v-container fluid>
            <v-row justify="center">
                <v-col cols="12">
                    <VTimeline truncate-line="both" side="end" direction="horizontal" line-inset="0">
                        <VTimelineItem v-for="item in events" :key="item.number" class="mb-12" :dot-color="item.color"
                            size="x-large">
                            <template v-slot:icon>
                                <span v-if="item.number == 5" class="timeline-number-selected">{{ item.number }}</span>
                                <span v-else class="timeline-number">{{ item.number }}</span>
                            </template>
                            <div v-if="item.number == 5" class="timeline-status-selected">{{ item.status }}</div>
                            <div v-else class="timeline-status">{{ item.status }}</div>
                        </VTimelineItem>
                        <!--<v-time-liner-item v-for="step in 5" :key="step" :active="step === 5" :label="'Step ' + step" />
                            -->
                    </VTimeline>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
import { VContainer, VRow, VCol, VTimeline } from 'vuetify/lib/components/index.mjs'
import { ref } from 'vue';
const events = ref([
  { status: 'Se connecter', number: '1', icon: 'pi pi-shopping-cart', color: '#fff', image: 'game-controller.jpg' },
  { status: 'Vérification', number: '2', icon: 'pi pi-cog', color: '#fff' },
  { status: 'Paiement', number: '3', icon: 'pi pi-shopping-cart', color: '#fff' },
  { status: 'Validation', number: '4', icon: 'pi pi-check', color: '#fff' },
  { status: 'Terminé', number: '5', icon: 'pi pi-check', color: '#EFF6FF' }
])
</script>

<style scoped>
.fullscreen-div {
    width: 100%;
    height: 100%;
    /* Set your desired background color */
}
</style>