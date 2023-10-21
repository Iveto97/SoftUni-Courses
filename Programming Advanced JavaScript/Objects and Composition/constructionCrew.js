function constructionCrew(worker) {

    if (worker.dizziness) {
        const sum = 0.1 * Number(worker.experience) * Number(worker.weight);
        worker.levelOfHydrated += sum;
        worker.dizziness = false;
    }
    return worker;
}

let worker = constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
);

console.log(constructionCrew(worker));