require 'jwt'

class ApplicationController < ActionController::API
    def secret_key
        'l3sli3mich3ell3'
      end
    
      #given some payload, I want to return a token
      def encode(payload)
        JWT.encode(payload, secret_key, 'HS512')
      end
    
      #given a token, I want to return the original payload
      def decode(token)
        JWT.decode(token, secret_key, true, {algorithm: "HS512"})[0]
      end
end
