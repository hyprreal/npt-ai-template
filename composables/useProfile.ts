// export async function useProfile() {
//   const user = useSupabaseUser()

//   const { data: profile, error } = await useAsyncData(
//     'user_profile',
//     async () => {
//       if (!user.value)
//         return null

//       const res = await useFetch('/api/profile', {
//         method: 'POST',
//         body: user.value,
//       })

//       return res.data.value
//     },
//     { watch: [() => user.value?.id] },
//   )

//   if (error.value)
//     console.log(error.value)

//   const userProfile = computed(() => {
//     if (!user.value || !profile.value)
//       return null
//     return profile.value
//   })

//   return userProfile
// }
