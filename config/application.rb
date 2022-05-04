require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module PricingTool
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.action_dispatch.cookies_same_site_protection = :strict
    config.load_defaults 6.1
    config.api_only = true
  end
end
