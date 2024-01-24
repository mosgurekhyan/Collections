class HeroesController {
  async getAll (req, res) {
    try {
      const heroes = await req.app.services.heroes.getAll()
      res.json({ heroes })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  async addHero (req, res) {
    try {
      await req.app.services.heroes.addHero(req.body)
      res.json({ message: 'Hero added'})
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  async goToEdit (req, res) {
    const { id } = req.params
    try {
      const hero = await req.app.services.heroes.goToEdit(id)
      res.json({ hero })
    } catch (error) {
      res.status(500).json({ message: error.message})
    }
  }

  async editHero (req, res) {
    const { id } = req.params
    try {
      await req.app.services.heroes.editHero(id, req.body)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  async deleteHero (req, res) {
    const { id } = req.params
    try {
      await req.app.services.heroes.deleteHero(id)
      res.json({ message: 'hero succesfully deleted!'})
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}

module.exports = HeroesController