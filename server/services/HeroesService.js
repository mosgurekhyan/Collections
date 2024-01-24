class HeroesService {
  constructor (models) {
    this.models = models
  }

  async getAll () {
    const heroes = await this.models.heroes.find({})
    return heroes
  }

  async addHero (body) {
    const hero = new this.models.heroes({ ...body })
    await hero.save()
    return hero
  }

  async goToEdit (id) {
    const result = await this.models.heroes.findById({ _id: id})
    return result
  }

  async editHero (id, body) {
    const result = await this.models.heroes.updateOne({ _id: id }, { ...body })
    return result
  }

  async deleteHero (id) {
    const result = await this.models.heroes.deleteOne({ _id: id })
    return result
  }
}

module.exports = HeroesService