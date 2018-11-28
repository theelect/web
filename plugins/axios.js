export default function({ $axios, store, app }) {
  const getToken = () => {
    let token = "";
    if (window.localStorage.getItem("theelect") !== null) {
      token = "Bearer " + JSON.parse(window.localStorage.getItem("theelect")).auth.token;
    } else if (store.state.auth.token !== null) {
      token = "Bearer " + store.state.auth.token;
    }
    return token;
  };
  $axios.setHeader("Authorization", getToken());
  $axios.onRequest(config => {
    console.log("Making request to " + config.url);
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code !== 200 || code !== 202) {
      app.$toast.error(error.response.data.message, {
        icon: "error_outline"
      });
    }
  });
}
