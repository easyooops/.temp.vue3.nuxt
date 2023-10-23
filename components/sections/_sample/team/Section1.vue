<template>
    <section id="team-2" class="gr--whitesmoke pb-40 inner-page-hero team-section">
        <div class="container">
            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-9">
                    <div class="section-title mb-80">
                        <h2 class="s-52 w-700">All we do is dream and craft amazing products</h2>
                    </div>
                </div>
            </div>
            <!-- TEAM MEMBERS WRAPPER -->
            <div class="team-members-wrapper">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <!-- vue template -->
                    <div v-if="pending">loading 중입니다..</div>
                    <template v-else>
                      <div v-if="error">Sorry, error occured.</div>
                      <div v-else class="col" v-for="user in userList">
                        <div id="tm-2-1" class="team-member mb-60 wow fadeInUp">
                          <!-- Team Member Photo -->
                          <div class="team-member-photo r-14" @click="getUserDetail({id : user.id})">
                            <div class="hover-overlay">
                              <img class="img-fluid" :src="user.image" :alt="user.name" />
                              <div class="item-overlay"></div>
                            </div>
                          </div>
                          <!-- Team Member Data -->
                          <div class="team-member-data">
                            <!-- Data -->
                            <h6 class="s-20 color--black w-700">{{ user.name }} / {{ user.username }}</h6>
                            <p class="pb-30 color--black">{{user.email}}</p>
                            <p class="p-20 color--grey" v-for="position in user.position">{{position}}</p>
                            <!-- Social Links -->
                            <ul class="tm-social ico-20 clearfix">
                              <li>
                                <a href="#"><span class="flaticon-facebook"></span></a>
                              </li>
                              <li>
                                <a href="#"><span class="flaticon-twitter"></span></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </template>
                </div>
                <!-- End row -->
            </div>
            <!-- TEAM MEMBERS WRAPPER -->
        </div>

      <div>
        <button @click="getStoreData">store 가져오기</button>
        <p>{{teamStoreData}}</p>
      </div>
        <!-- End container -->
    </section>
</template>

<script setup lang="ts">
  import restApi from "~/util/api"
  import {integer} from "vscode-languageserver-types"
  import {useTeamStore} from "~/stores/team"

  const userList = ref([]);
  const error = ref(null);
  const pending = ref(true);
  const teamStore = useTeamStore();
  const teamStoreData = ref(null);

  const { get, post } = restApi()

  const getUserList = async () => {
    try {
      const response = await restApi().get('/rest/api/user/list', { test: '1234' });
      userList.value = JSON.parse(response.data.value);
    } catch (err) {
      error.value = err;
    } finally {
      pending.value = false;
    }
  };

  const getUserDetail = async ({id}: { id: integer }) => {
    try {
      const response = await post('/rest/api/user/'+id, { id: id })
      teamStore.setUserInfo(JSON.parse(response.data.value))
    } catch (err) {
      error.value = err
    } finally {
      pending.value = false
    }
  }

  const getStoreData = () => {
    teamStoreData.value = teamStore.getUserInfo
  }

  getUserList();

</script>

