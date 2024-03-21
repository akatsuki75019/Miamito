module SpoonacularFetch
  include HTTParty
  BASE_URI = 'https://api.spoonacular.com'.freeze

  def self.search_recipes(search_term, page)
    api_key = ENV['API_KEY']
    url = "#{BASE_URI}/recipes/autocomplete"
    query = {
      apiKey: api_key,
      complexSearch: true,
      query: search_term,
      offset: (page - 1) * 10,
      number: 10
    }

    response = HTTParty.get(url, query: query)
    response.parsed_response
  end

  def self.get_recipe_summary(recipe_id)
    api_key = ENV['API_KEY']
    url = "#{BASE_URI}/recipes/#{recipe_id}/summary?apiKey=#{api_key}"
  
    response = HTTParty.get(url)
    response.parsed_response
  end

  def self.get_recipe_information(recipe_id)
    api_key = ENV['API_KEY']
    url = "#{BASE_URI}/recipes/#{recipe_id}/information?apiKey=#{api_key}"
  
    response = HTTParty.get(url)
    response.parsed_response
  end
  
  def self.get_recipe_instructions(recipe_id)
    api_key = ENV['API_KEY']
    url = "#{BASE_URI}/recipes/#{recipe_id}/analyzeInstructions"
  
    response = HTTParty.get(url)
    response.parsed_response
  end

def self.getMealPlan
  api_key = ENV['API_KEY']
  url = "#{BASE_URI}/mealplanner/generate"
  query = {
    timeFrame: "week",
    targetCalories: 2500,
    apiKey: api_key,

  }
  response = HTTParty.get(url, query: query)
  response.parsed_response
end

  def self.get_favourite_recipes_by_ids(ids)
    api_key = ENV['API_KEY']
    url = "#{BASE_URI}/recipes/informationBulk"
    query = {
      apiKey: api_key,
      ids: ids.join(",")
    }

    response = HTTParty.get(url, query: query)
    { results: response.parsed_response }
  end
end
