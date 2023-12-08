

export async function likes(ctx) {
    const characterId = ctx.params.id;

    const data = {
        characterId
    }

   const response = await ctx.post(`data/useful`, data);
   ctx.goTo(`/details/${characterId}`);
}