<template>
    <div>
        <pre>
            {{ user }}
        </pre>
    </div>
</template>

<script setup>
    const user = ref(null);
    const cookie = useCookie("jwt-token");
    const errors = ref(null);
    const sub = async () => {
        try {
            const { data, error } = await useFetch("http://localhost:5281/api/Auth/user/check", {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Bearer: cookie.value
            },
        });
            if (error.value) {
                throw error.value;
            }
            cookie.value = data.value.data.token;
            console.log(data.value)
            if(data.value){
                user.value = data.value
            }
            } catch (error) {
                console.log(error);
                errors.value = error;
            }  
        };
        onMounted(async()=>{
            await sub()
        })
</script>

<style lang="scss" scoped>

</style>