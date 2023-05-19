from google.oauth2 import service_account
from googleapiclient.discovery import build

# Load the credentials from the 'service_account.json' you downloaded
credentials = service_account.Credentials.from_service_account_file(
    'path/to/your/service_account.json', 
    scopes=["https://www.googleapis.com/auth/tagmanager.readonly"]  # or tagmanager.edit.containers if you want to modify tags
)

# Build the service
service = build('tagmanager', 'v2', credentials=credentials)

# Get the accounts for the authenticated user
accounts = service.accounts().list().execute()

# Print the accounts
for account in accounts['account']:
    print('Path: %s' % account['path'])
    print('Account ID: %s' % account['accountId'])
    print('Name: %s' % account['name'])
    print('Share Data: %s' % account.get('shareData', False))
    print()


# Create a new tag
def create_tag(service, path, tag_name):
    tag_body = {
        'name': tag_name,
        'type': 'html',
        'parameter': [{
            'type': 'template',
            'key': 'html',
            'value': '<p>Hello, world!</p>'
        }]
    }
    return service.accounts().containers().workspaces().tags().create(parent=path, body=tag_body).execute()


# Create a new trigger
def create_trigger(service, path, trigger_name):
    trigger_body = {
        'name': trigger_name,
        'type': 'pageview',
        'filter': [{
            'type': 'equals',
            'parameter': [
                {'type': 'template', 'key': 'arg0', 'value': '{{Page URL}}'},
                {'type': 'template', 'key': 'arg1', 'value': 'https://example.com'}
            ]
        }]
    }
    return service.accounts().containers().workspaces().triggers().create(parent=path, body=trigger_body).execute()


# Create a new version
def create_version(service, path):
    return service.accounts().containers().versions().create(parent=path).execute()


# List all tags in a container
def list_tags(service, path):
    return service.accounts().containers().workspaces().tags().list(parent=path).execute()


# Get the current state of a workspace
def get_workspace(service, path):
    return service.accounts().containers().workspaces().get(path=path).execute()
